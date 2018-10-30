import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressBarModule
} from '@angular/material';

import { QuickSearchComponent } from './quick-search.component';
import { PostsService } from '../shared/services/posts.service';

@NgModule({
    declarations: [ QuickSearchComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,

        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatProgressBarModule
    ],
    exports: [ QuickSearchComponent ],
    providers: [ PostsService ]
})

export class QuickSearchModule {}
