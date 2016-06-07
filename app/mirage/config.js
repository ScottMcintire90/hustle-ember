export default function() {
  this.get('article', function(db,request) {

    if(request.queryParams.name !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    }
    else {
      return { data: rentals };
    }
  });
}
