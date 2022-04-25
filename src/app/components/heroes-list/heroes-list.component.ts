import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeroesService } from '../../services/heroes.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogAddHeroeComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogDeleteHeroeComponent } from '../dialog-delete-heroe/dialog-delete-heroe.component';
import { DialogEditHeroeComponent } from '../dialog-edit-heroe/dialog-edit-heroe.component';

export interface Heroe {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'edit', 'delete'];
  dataSource: MatTableDataSource<Heroe>;
  heroes: any;

  name: string = '';
  age: number = 0;
  id: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private httpService: HeroesService, public dialog: MatDialog) {
    this.listHeroes();
    this.dataSource = new MatTableDataSource(this.heroes);
  }

  listHeroes() {
    this.httpService.list().subscribe(
      (response) => {
        this.heroes = response;
        this.dataSource = new MatTableDataSource(this.heroes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(heroe: Heroe, dialodType: string): void {
    if (dialodType == 'delete') {
      const dialogRef = this.dialog.open(DialogDeleteHeroeComponent, {
        data: heroe.id,
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.deleteHeroe(heroe.id);
      });
    } else {
      const dialogRef = this.dialog.open(DialogEditHeroeComponent, {
        data: { name: heroe.name, age: heroe.age, id: heroe.id },
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.editHeroe(result);
      });
    }
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(DialogAddHeroeComponent, {
      data: { name: this.name, age: this.age },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.createHeroe(result.name, result.age);
    });
  }

  createHeroe(name: string, age: number) {
    let newId: number;
    if (this.dataSource.data.length !== 0) {
      newId = this.dataSource.data.slice(-1)[0].id + 1;
    } else {
      newId = 1;
    }
    let hero: Heroe = {
      name: name,
      age: age,
      id: newId,
    };
    this.httpService.create(hero).subscribe(
      (response) => {
        this.listHeroes();
      },
      (error) => {}
    );
  }
  deleteHeroe(id: number) {
    this.httpService.delete(id).subscribe(
      (response) => {
        this.listHeroes();
      },
      (error) => {}
    );
  }

  editHeroe(heroe: Heroe) {
    let data = {
      name: heroe.name,
      age: heroe.age,
    };
    this.httpService.update(heroe.id, data).subscribe(
      (response) => {
        this.listHeroes();
      },
      (error) => {}
    );
  }
}
