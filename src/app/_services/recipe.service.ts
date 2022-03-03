import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { app } from '../app.module';

// app
const baseUrl = `${environment.apiUrl}/recipe` ;

import { getFirestore, collection, where, query,doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { collectionChanges, collectionData } from 'rxfire/firestore';
import { tap } from 'rxjs/operators';
 
const appConfig = app;
const firestore = getFirestore(appConfig);

 
// const db = getFirestore(app);

  
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  getAll() {
    const dataRef = query(
      collection(firestore, 'recipe')
      // where('name', '==', '1')
    );
 return  collectionData(dataRef, { idField: 'name' })
    .pipe(
      tap(cities => console.log('This is just an observable!'))
    )
  }

  getById(id: string) {
    const dataRef = query(
      collection(firestore, 'recipe'),
      where('name', '==', id)
    );
 return  collectionData(dataRef, { idField: 'name' })
    .pipe(
      tap(cities => console.log('This is just an observable!'))
    )
    // return this.http.get<any>(`${baseUrl}/${id}`);
  }

  create(params: any) {
const DocRef = doc(firestore, 'recipe/'+params.name);
    const res =setDoc(DocRef,params);
    return res
  }

  update(id: string, params: any) {
   let res =  doc(firestore,'recipe/'+id)
   
 let finRes = updateDoc(res,params);

    return finRes
    // return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    let Doc = doc(firestore,'recipe/'+id)
  return deleteDoc(Doc) ;
    // Doc.delete();

    // return this.http.delete(`${baseUrl}/${id}`);

  }
}
