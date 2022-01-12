export interface UserEntity {
    UserName:string;
    Password:string;
}

export interface UserResponse {
    id:number;
    userName:string;
    password:string;
    firstName:string;
    lastName:string;
    emailAddress:string;
    address:string;
    birdDate:string;
    message:string;
    status:string;
}

export interface RequestUser {
    Id:number;
    UserName:string;
    Password:string;
    FirstName:string;
    LastName:string;
    EmailAddress:string;
    Address:string;
    BirdDate:string;
}

export interface ListUserEntity {
    listUser:UserResponse[];
    message:string;
    status:string;
}