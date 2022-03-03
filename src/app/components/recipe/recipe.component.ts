import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
export interface UsersData {
  id: number;
  name: string;
  description:string;
  category:string;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Chilli Idli',description:'Chilli Idli is a very delicious Indo Chinese recipe which you can serve as a starter. It is a quick and easy recipe, making it a great option to include in the menu at any party.',category:'BreakFast'},
  {id: 1560608796014, name: 'Keema Naan',description:'keema naan: This is a delicious naan recipe, stuffing is prepare with mince mutton & spices. Spicy stuffing makes this keema naan complete meal, you can pair this with raita or your favorite gravy.',category:'Normal'},
  {id: 1560608787815, name: 'Paneer Masala Fry',description:'This paneer masala fry is packed with a punch of masalas that gives you an explosion of taste in every bite.',category:'Fast Food'},
  {id: 1560608805101, name: 'Kariwari Chicken Curry',description:'Named after the city of Karwar, this chicken curry is inspired by the coastal flavours of the coconut. The chicken is marinated in a paste made of red chillies, coriander seeds and garlic and later on cooked in spicy and aromatic masalas.',category:'Fast Food'}
];


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  // name, description, category(desert, fast food, normal)
  displayedColumns: string[] = ['id', 'name', 'description', 'category', 'action'];
  dataSource !:UsersData[];

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  this.dataSource = ELEMENT_DATA;
    
  }

  openDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: { name: string;description:string;category:string; }){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name,
      description:row_obj.description,
      category:row_obj.category
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj: { id: number; name:string; description:string; category:string;}){
      
      this.dataSource = this.dataSource.filter((value: { id: number; name: string; description:string; category:string; },key: number)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj: { id: any; }){
    this.dataSource = this.dataSource.filter((value: { id: number; },key: number)=>{
      return value.id != row_obj.id;
    });
  }

}
