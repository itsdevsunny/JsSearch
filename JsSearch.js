var query_list = ['d', 'da', 'dat', 'data', 's', 'su', 'sun', 'sunn', 'sunny']; //query as list

var query_object = {'d':'data', 'da':'data1', 'dat':'data2', 'data':'data3', 's':'sunny', 'su':'sunny1', 'sun':'sunny2', 'sunn':'sunny3', 'sunny':'sunny4'}; //query as object

function JsSearchJson(query, query_object){
  var query_length = query.length;
  var result = [];
  $.each(query_object, function(i, v){
    if(i.length >= query_length){
      if(i.slice(0,query_length) == query){
        result.push(i);
      }
    }
  });
  return result;
}

function JsSearch(query, query_list){
  var query_length = query.length;
  var result = [];
  $.each(query_list, function(i, v){
    if(v.length >= query_length){
      if(v.slice(0,query_length) == query){
        result.push(v);
      }
    }
  });
  return result;
}


console.log(JsSearchJson("sun", query_object));
console.log(JsSearch("da", query_list));