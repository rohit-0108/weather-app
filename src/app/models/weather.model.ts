export interface weather
{
    location:Location;
    current:Current;


}

export interface Location{
    name:string;
    region:string;
    country:string;
}

export interface Current
{
    temp_c:number;
    temp_f:number;
    is_day:number;
    condition:Condition;
    wind_kph:number;
    wind_mph:number;
    humidity:number;


}

export interface Condition{
    text:string;
    icon:string;
}