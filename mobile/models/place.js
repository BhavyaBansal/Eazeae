class Place{
    constructor(
        id,
        name,
        categoryIds,//array
        openingTime,
        closingTime,
        country,
        state,
        city,
        images,//array
        packsObjWithPrice,//map or dictionary
        latitude,
        longitude,
        description,
        details,//array
        reviews,//map or dictionary
        tags//array
    ){
        this.id=id;
        this.name=name;
        this.categoryIds = categoryIds;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.country = country;
        this.state = state;
        this.city = city;
        this.images = images;
        this.packsObjWithPrice = packsObjWithPrice;
        this.latitude = latitude;
        this.longitude = longitude;
        this.description = description;
        this.details = details;
        this.reviews = reviews;
        this.tags = tags;
    }
}
export default Place;