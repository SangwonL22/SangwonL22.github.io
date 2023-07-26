'use strict';

new TypeIt('.home__title--strong', {
  loop: false,
  speed: 100,
}) // 프론트엔드 개발자
  .move(-9)
  .type('코딩을 즐기는 ')
  .delete()
  .move(6)
  .delete()
  .type('백앤드도 하고 싶은 ')
  .delete()
  .type('풀스택이 목표인 ')
  .delete()
  .type('매일 고단히 공부하는 ')
  .move(null, { to: 'END' })
  .delete()
  .type('꿈을 설계하는 주니어 개발자 ')
  .delete()
  .go();
