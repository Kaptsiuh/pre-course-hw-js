let passport = {
  name: 'Petr',
  surname: 'Petrov',
};

const passportClone = structuredClone(passport);

passportClone.name = 'Ivan';

console.log(passport.name);
console.log(passportClone.name);
