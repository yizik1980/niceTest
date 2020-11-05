export class TableTitleData {
    constructor(Header: string, field: string) {
        this.field = field;
        this.headerName = this.headerName;
    }
    headerName: string;
    field: string;
    cellRenderer(params: any) {
        if (!params.value) { return ''; }
        return '<span ng-style="{ color: \'red\' }">' + params.value + '<span>';
    }
}
