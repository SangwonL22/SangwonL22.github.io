'use strict';

new TypeIt('.home__title--strong', {
  loop: false,
  speed: 95,
}) // 프론트엔드 개발자
  .move(-9)
  .type('꾸준히 공부중인 ')
  .pause(2000)
  .delete()
  .move(6)
  .delete()
  .type('새로운 것도 배우고 싶은 ')
  .pause(1500)
  .delete()
  .type('풀스택이 목표인 ')
  .pause(1500)
  .delete()
  .type('꾸준히 공부하는 ')
  .pause(1500)
  .move(null, { to: 'END' })
  .delete()
  .type('꿈을 설계하는 주니어 개발자 ')
  .pause(3000)
  .delete()
  .go();
