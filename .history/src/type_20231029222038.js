'use strict';

new TypeIt('.home__title--strong', {
  loop: false,
  speed: 95,
}) // 프론트엔드 개발자
  .move(-3)
  .delete()
  .type('근면성실하게 해낼 ')
  .pause(2000)
  .delete()

  .type('새로운 것도 배우고 싶은 ')
  .pause(1500)
  .delete()
  .type('분야여 상관없이')
  .pause(1500)
  .delete()
  .type('오픈마인드인 ')
  .pause(1500)
  .move(null, { to: 'END' })
  .delete()
  .type(' ')
  .pause(3000)
  .delete()
  .go();
