import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from "../environments/environment";
import { FirebaseOptions } from '@firebase/app-types';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig as FirebaseOptions),
    AngularFireDatabaseModule
  ],
  exports: [
    AngularFireDatabaseModule
  ]
})
export class Db1Module { }
