export interface BookResponse{
    items: Book[];
    kind: string;
    totalItems: number;
}

export interface Book{
    kind : string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}

export interface VolumeInfo{
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifiers[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    language: string;

}

export interface IndustryIdentifiers{
    type: string;
    identifier: string;
}

export interface ReadingModes{
    text: boolean;
    image: boolean;
}

export interface PanelizationSummary{
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
    
}

export interface ImageLinks{
    smallThumbnail: string;
    thumbnail: string;
}

export interface SaleInfo{
    country: string;
    saleability: string;
    isEbook: boolean;
}

export interface AccessInfo{

    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface Epub{
    isAvailable: boolean;
}

export interface Pdf{
    isAvailable: boolean;
}

export interface SearchInfo{
    textSnippet: string;
}
