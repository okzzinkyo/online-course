// NOTE: Method => 해당 Object
const audio = {
  title: 'a',
  play(){
    console.log('play this', this);
  }
}

audio.play();

audio.stop = function () {
  console.log('stop this', this);
}

audio.stop();

// NOTE: Function => Window Object
function plauAudio() {
  console.log(this);
}

plauAudio();

// NOTE: Constructor Function => {} 빈 객체
function Audio(title) {
  this.title = title;
  console.log(this);
}

const newAudio = new Audio('a');

const audioPlay = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  dispalyCategories() {
    this.categories.forEach(
      function (category) {
        console.log(`title: ${this.title}, category: ${category}`); // forEach 함수의 this, title => undefined
      },
      { title: 'audio' } // 두번째 인자로 정보 제공
    );

    this.categories.forEach(function (category) {
      console.log(`title: ${this.title}, category: ${category}`);
    }, this); // dispalyCategories Method의 this, Object 가리킴

    // NOTE: 화살표 함수안의 this는 항상 상위 스코프의 this를 가리킴
    // Lexical this
    this.categories.forEach((category) => {
      console.log(`title: ${this.title}, category: ${category}`);
    });
  }
};

audioPlay.dispalyCategories();