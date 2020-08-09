const generateTex = (title, price) => {
  return `${title} ${price}`;
};

exports.createElement = (type, text, className) => {
  const newelement = document.createElement(type);
  newelement.classList.add(className);
  newelement.textContent = text;
  return newelement;
};

const validateInput = (text, notEmpty, isNumber) => {
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate= (title,price) =>{
    if(!validateInput(title,true,false) || !validateInput(price,false,true) ){
        return false
    }
    return generateTex(title,price)
}

exports.generateTex = generateTex;
exports.validateInput = validateInput