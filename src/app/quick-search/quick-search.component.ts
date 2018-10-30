import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { debounceTime, finalize } from 'rxjs/operators';
import { PostsService } from '../shared/services/posts.service';
import { Posts } from '../shared/model/posts.model';

@Component({
    selector: 'app-quick-search',
    templateUrl: './quick-search.component.html',
    styleUrls: ['./quick-search.component.scss']
})

export class QuickSearchComponent implements OnInit {
    formGroup: FormGroup;
    postsData: Array<Posts> = [];
    postsDataProcessed = new MatTableDataSource<Posts>();
    displayedColumns: string[] = ['id', 'userId', 'title'];
    loading = false;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    get qs() { return this.formGroup.get('qs') as FormControl; }

    constructor(private fb: FormBuilder,
                private service: PostsService) {}

    ngOnInit(): void {
        this.formGroup = this.fb.group({
            qs: ['']
        });

        this.getPostsFromService();

        this.qs.valueChanges
            .pipe(
                debounceTime(600)
            )
            .subscribe(_ => {
                this.loading = true;
                this.processQuickSearch();
            });

        this.postsDataProcessed.paginator = this.paginator;
    }

    getPostsFromService(): void {
        this.loading = true;
        // Added 3s before loading the data just to simulate fetching big data and to show the progress bar working
        setTimeout(() => {
            this.service.getPosts()
                .pipe(
                    finalize(() => this.loading = false)
                )
                .subscribe((postsData: Array<Posts>) => {
                    this.postsData = postsData;
                    this.postsDataProcessed.data = postsData;
                });
        }, 3000);
    }

    processQuickSearch(): MatTableDataSource<Posts> {
        this.postsDataProcessed.data = this.postsData.filter(post => post.title.indexOf(this.qs.value) > -1);
        this.loading = false;

        return this.postsDataProcessed;
    }
}
