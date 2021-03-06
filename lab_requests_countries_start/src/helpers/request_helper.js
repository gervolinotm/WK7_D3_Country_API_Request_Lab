const RequestHelper = function(url){
   this.url = url;
 };

RequestHelper.prototype.get = function (onComplete){
   const xhr = new XMLHttpRequest()

   console.log("Away getting data")

   xhr.addEventListener('load', () => {
     if (xhr.status !== 200) return
     const jsonString = xhr.responseText;
     const data = JSON.parse(jsonString);
     console.log("got it!")
     onComplete(data);
   });

   xhr.open('GET', this.url);
   xhr.setRequestHeader('Accept', 'application/json');
   xhr.send();
};

module.exports = RequestHelper;
