import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDatabase, ref, onValue, off, set } from 'firebase/database';
@Injectable({
  providedIn: 'root',
})
export class vitaeServices {
  constructor(private db: AngularFirestore) {}

  dataChanged = new EventEmitter<any>();

  getData(): void {
    const db = getDatabase();
    const starCountRef = ref(db, 'BCI');
    onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();

        this.dataChanged.emit(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendData(data: any): void {
    const db = getDatabase();
    const dataRef = ref(db, 'BCI/action');

    set(dataRef, data)
      .then(() => {
        console.log('Data sent successfully.');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  }


  stopDataUpdates(): void {
    const db = getDatabase();
    const starCountRef = ref(db, 'BCI');
    off(starCountRef);
  }
}
