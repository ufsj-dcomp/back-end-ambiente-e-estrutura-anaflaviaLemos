import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HotelService } from '../hotel.service';
import {MatTableDataSource} from '@angular/material/table';


export class Hotel {
  id: number;
  nome: string;
  acomodacao: string;
  category: string;
  status: string;
}




@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'acomodacao', 'category', 'status' , 'acoes'];
  dataSource = new MatTableDataSource<Hotel>();

  constructor(private service: HotelService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getHoteis().subscribe(hoteis => this.dataSource.data = hoteis);
  }
  
  openNewDialog(): void {
    const dialogRef = this.dialog.open(MngHotelDialog, {
      width: '750px',
      data: new Hotel()
    });


    dialogRef.afterClosed().subscribe(hotel => {
      console.log(hotel);
      this.service.adicionar(hotel).subscribe(hotelId =>{
        this.service.getHotel(hotelId).subscribe(newHotel => {
          this.dataSource.data = this.dataSource.data.concat(newHotel);

        });
        
      });

    })

  }

  openEditDialog(hotel: Hotel): void {
    const dialogRef = this.dialog.open(MngHotelDialog, {
      width: '750px',
      data: hotel
    });


    dialogRef.afterClosed().subscribe(hotel => {
      this.service.editar(hotel).subscribe(_  => {
        this.dataSource.data =  this.dataSource.data.map(oldHotel => {
          if (oldHotel.id == hotel.id) return hotel;

        });
        
      });

    })

  }

  excluir(hotel: Hotel):  void {
    this.service.remover(hotel.id).subscribe(_ => {
      this.dataSource.data = this.dataSource.data.filter(oldHotel => oldHotel.id != hotel.id)
    })
  }
}




@Component({
  selector: 'dialog-mng-hotel',
  templateUrl: 'dialog-mng-hotel.html'
})

export class MngHotelDialog{
  constructor(public dialogRef: MatDialogRef<MngHotelDialog>,

    @Inject(MAT_DIALOG_DATA) public data: Hotel) {}
    
  onNoClick(): void{
    this.dialogRef.close();
  }
 
}