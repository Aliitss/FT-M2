var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if (matchFunc(startEl)) resultSet.push(startEl); // si el elemento matchie el selector y luego agrega el elemento al resultSet

  for (var el of startEl.children) { // recorre los hijos del elemento
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, el)); // recursivamente llama a la función para los hijos
   
  }

return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") {
    return "id";
  }
  if (selector[0] === ".") {
    return "class";
  }
  if (selector.includes(".")) {
    return "tag.class";
    }
  return "tag";

  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(el) {
      return el.id === selector.substring(1);
    };
   
  } else if (selectorType === "class") {
    matchFunction = function(el) {
      return el.classList.contains(selector.substring(1));
    };
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(el) {
      return el.tagName.toLowerCase() === selector.split(".")[0] && el.classList.contains(selector.split(".")[1]);
    };
    
    
  } else if (selectorType === "tag") {
    matchFunction = function(el) {
      return el.tagName.toLowerCase() === selector;
    };
    
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
