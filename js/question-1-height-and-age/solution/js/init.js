function classify() {

  const inputAge = document.getElementById('age').value;
  const inputHeight = document.getElementById('height').value;

  if (inputAge > 0 && inputHeight > 0) {

  document.getElementById('person-class').style.display = 'block';

  function Person(age, height) {
    this.age = age;
    this.height = height;

    this.getType = function () {
      if (this.age < 10) {
        return 'child';
      } else if (this.age >= 10 && this.age < 20) {
        return 'teenager';
      } else if (this.age >= 20 && this.age < 60) {
        return 'adult';
      } else if (this.age >= 60) {
        return 'senior';
      }
    }

    this.getSize = function () {
      if (this.age > 12) {
        if (this.height >= 1.7) {
          return 'tall';
        } else if (this.height <= 1.47) {
          return 'short';
        } else {
          return 'of average height';
        }
      } else {
        // Wheech's human height (metres) formula for under 12s
        const averageHeight = (this.age * 6 + 77) / 100;
        // within +-15% of the average the person is average, outside of that they are either tall or short
        if (this.height >= (1.15 * averageHeight)) {
          return 'tall';
        } else if (this.height <= (0.85 * averageHeight)) {
          return 'short';
        } else {
          return 'of average height';
        }
      }
    }
  }

  var someHuman = new Person(inputAge, inputHeight);

  let result = 'This ' + someHuman.getType() + ' is ' + someHuman.getSize() + '.';

  document.getElementById('person-class-text').innerHTML = result;

  } else {
    document.getElementById('person-class-text').innerHTML = 'Please enter valid age and height values.';
  }
} 