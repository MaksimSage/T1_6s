// фабрика для валидации
function createValidator(type) {
  const validators = {
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: (value) => /^\+7\d{10}$/.test(value),
    password: (value) => value.length >= 6,
    required: (value) => value.trim() !== ''
  };
  
  const messages = {
    email: 'Некорректный email',
    phone: 'Телефон должен быть в формате +7XXXXXXXXXX',
    password: 'Пароль должен быть не менее 6 символов',
    required: 'Поле обязательное'
  };
  
  return {
    validate: (value) => validators[type](value),
    errMessage: messages[type] 
  };
}


function validateForm(data) {
  const rules = {
    email: createValidator('email'),
    phone: createValidator('phone'),
    password: createValidator('password'),
    name: createValidator('required')
  };
  
  const errors = [];
  
  for (const [field, validator] of Object.entries(rules)) {
    if (!validator.validate(data[field])) {
      errors.push(`${field}: ${validator.errMessage}`);
    }
  }
  
  return errors;
}




const formData = {
  email: 'test',
  phone: '123',
  password: '123',
  name: ''
};

const errors = validateForm(formData);
console.log(errors);

// createValidator создает валидатор по типу, который в себе содержит сообщение и метод валидации, 
// не надо проверять каждое поле из формы (единая точка создания + одинаковая структура), 
// достаточно прописать только rule (легко добавляются новые типы)