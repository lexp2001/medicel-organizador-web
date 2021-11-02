export interface User
{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    status?: string;
}

export interface Labor
{
    _id?: string;
    organization: string;
    client: string;
    img: string;
    dateCreation: string;
    name: string;
    description: string;
    city: string;
    country: string;
    address: string;
    status: boolean;
}