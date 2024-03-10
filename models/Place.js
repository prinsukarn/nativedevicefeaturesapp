class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat,long}
    this.id = new DataTransfer().toString() + Math.random().toString();
  }
}
