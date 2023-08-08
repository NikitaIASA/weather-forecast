export interface staticDataIn {
    id: number;
    image: string;
    city: string;
    fromDate: string;
    toDate: string;
}

export const staticData: staticDataIn[] = [
    {
        id: 1,
        image: "Berlin.jpg",
        city: "Berlin",
        fromDate: "2023-07-14",
        toDate: "2023-07-23",
    },
    {
        id: 2,
        image: "Tokyo.jpg",
        city: "Tokyo",
        fromDate: "2023-08-17",
        toDate: "2023-08-23",
    },
    {
        id: 3,
        image: "Barcelona.jpg",
        city: "Barcelona",
        fromDate: "2023-08-16",
        toDate: "2023-08-26",
    },
];

export const cities = ["Mariupol", "Madrid", "Venezia"];