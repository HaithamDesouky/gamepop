const makeImage = url => {
  const image = new Image();
  image.src = url;
  return image;
}

const characterImages = {
  characterIdle: [
    makeImage('../images/Character/IdleBlinking/00.png'),
    makeImage('../images/Character/IdleBlinking/01.png'),
    makeImage('../images/Character/IdleBlinking/02.png'),
    makeImage('../images/Character/IdleBlinking/03.png'),
    makeImage('../images/Character/IdleBlinking/04.png'),
    makeImage('../images/Character/IdleBlinking/05.png'),
    makeImage('../images/Character/IdleBlinking/06.png'),
    makeImage('../images/Character/IdleBlinking/07.png'),
    makeImage('../images/Character/IdleBlinking/08.png'),
    makeImage('../images/Character/IdleBlinking/09.png'),
    makeImage('../images/Character/IdleBlinking/10.png'),
    makeImage('../images/Character/IdleBlinking/11.png'),
    makeImage('../images/Character/IdleBlinking/12.png'),
    makeImage('../images/Character/IdleBlinking/13.png'),
    makeImage('../images/Character/IdleBlinking/14.png'),
    makeImage('../images/Character/IdleBlinking/15.png'),
    makeImage('../images/Character/IdleBlinking/16.png'),
    makeImage('../images/Character/IdleBlinking/17.png'),
    makeImage('../images/Character/IdleBlinking/00.png')
  ],

  jumpingCharacter: [
    makeImage('../images/Character/JumpStart/00.png'),
    makeImage('../images/Character/JumpStart/01.png'),
    makeImage('../images/Character/JumpStart/02.png'),
    makeImage('../images/Character/JumpStart/03.png'),
    makeImage('../images/Character/JumpStart/04.png'),
    makeImage('../images/Character/JumpStart/05.png')
  ],

  attackCharacter: [
    makeImage('../images/Character/ThrowingInTheAir/00.png'),
    makeImage('../images/Character/ThrowingInTheAir/01.png'),
    makeImage('../images/Character/ThrowingInTheAir/02.png'),
    makeImage('../images/Character/ThrowingInTheAir/03.png'),
    makeImage('../images/Character/ThrowingInTheAir/04.png'),
    makeImage('../images/Character/ThrowingInTheAir/05.png'),
    makeImage('../images/Character/ThrowingInTheAir/06.png'),
    makeImage('../images/Character/ThrowingInTheAir/07.png'),
    makeImage('../images/Character/ThrowingInTheAir/08.png'),
    makeImage('../images/Character/ThrowingInTheAir/09.png'),
    makeImage('../images/Character/ThrowingInTheAir/10.png'),
    makeImage('../images/Character/ThrowingInTheAir/11.png')
  ],

  leftCharacter: [
    makeImage('../images/Character/Running/00.png'),
    makeImage('../images/Character/Running/01.png'),
    makeImage('../images/Character/Running/02.png'),
    makeImage('../images/Character/Running/03.png'),
    makeImage('../images/Character/Running/04.png'),
    makeImage('../images/Character/Running/05.png'),
    makeImage('../images/Character/Running/06.png'),
    makeImage('../images/Character/Running/07.png'),
    makeImage('../images/Character/Running/08.png'),
    makeImage('../images/Character/Running/09.png'),
    makeImage('../images/Character/Running/10.png'),
    makeImage('../images/Character/Running/11.png')
  ],

  rightCharacter: [
    makeImage('../images/Character/RunningLeft/00.png'),
    makeImage('../images/Character/RunningLeft/01.png'),
    makeImage('../images/Character/RunningLeft/02.png'),
    makeImage('../images/Character/RunningLeft/03.png'),
    makeImage('../images/Character/RunningLeft/04.png'),
    makeImage('../images/Character/RunningLeft/05.png'),
    makeImage('../images/Character/RunningLeft/06.png'),
    makeImage('../images/Character/RunningLeft/07.png'),
    makeImage('../images/Character/RunningLeft/08.png'),
    makeImage('../images/Character/RunningLeft/09.png'),
    makeImage('../images/Character/RunningLeft/10.png'),
    makeImage('../images/Character/RunningLeft/11.png')
  ],

  hurtCharacter: [
    makeImage('../images/Character/Hurt/00.png'),
    makeImage('../images/Character/Hurt/01.png'),
    makeImage('../images/Character/Hurt/02.png'),
    makeImage('../images/Character/Hurt/03.png'),
    makeImage('../images/Character/Hurt/04.png'),
    makeImage('../images/Character/Hurt/05.png'),
    makeImage('../images/Character/Hurt/06.png'),
    makeImage('../images/Character/Hurt/07.png'),
    makeImage('../images/Character/Hurt/08.png'),
    makeImage('../images/Character/Hurt/09.png'),
    makeImage('../images/Character/Hurt/10.png'),
    makeImage('../images/Character/Hurt/11.png')
  ]
};

const divaImages = {
  characterIdle: [
    makeImage('../images/Orc/IdleBlinking/00.png'),
    makeImage('../images/Orc/IdleBlinking/01.png'),
    makeImage('../images/Orc/IdleBlinking/02.png'),
    makeImage('../images/Orc/IdleBlinking/03.png'),
    makeImage('../images/Orc/IdleBlinking/04.png'),
    makeImage('../images/Orc/IdleBlinking/05.png'),
    makeImage('../images/Orc/IdleBlinking/06.png'),
    makeImage('../images/Orc/IdleBlinking/07.png'),
    makeImage('../images/Orc/IdleBlinking/08.png'),
    makeImage('../images/Orc/IdleBlinking/09.png'),
    makeImage('../images/Orc/IdleBlinking/10.png'),
    makeImage('../images/Orc/IdleBlinking/11.png'),
    makeImage('../images/Orc/IdleBlinking/12.png'),
    makeImage('../images/Orc/IdleBlinking/13.png'),
    makeImage('../images/Orc/IdleBlinking/14.png'),
    makeImage('../images/Orc/IdleBlinking/15.png'),
    makeImage('../images/Orc/IdleBlinking/16.png'),
    makeImage('../images/Orc/IdleBlinking/17.png'),
    makeImage('../images/Orc/IdleBlinking/00.png')
  ],

  jumpingCharacter: [
    makeImage('../images/Orc/JumpStart/00.png'),
    makeImage('../images/Orc/JumpStart/01.png'),
    makeImage('../images/Orc/JumpStart/02.png'),
    makeImage('../images/Orc/JumpStart/03.png'),
    makeImage('../images/Orc/JumpStart/04.png'),
    makeImage('../images/Orc/JumpStart/05.png')
  ],

  attackCharacter: [
    makeImage('../images/Orc/ThrowingInTheAir/00.png'),
    makeImage('../images/Orc/ThrowingInTheAir/01.png'),
    makeImage('../images/Orc/ThrowingInTheAir/02.png'),
    makeImage('../images/Orc/ThrowingInTheAir/03.png'),
    makeImage('../images/Orc/ThrowingInTheAir/04.png'),
    makeImage('../images/Orc/ThrowingInTheAir/05.png'),
    makeImage('../images/Orc/ThrowingInTheAir/06.png'),
    makeImage('../images/Orc/ThrowingInTheAir/07.png'),
    makeImage('../images/Orc/ThrowingInTheAir/08.png'),
    makeImage('../images/Orc/ThrowingInTheAir/09.png'),
    makeImage('../images/Orc/ThrowingInTheAir/10.png'),
    makeImage('../images/Orc/ThrowingInTheAir/11.png')
  ],

  leftCharacter: [
    makeImage('../images/Orc/Running/00.png'),
    makeImage('../images/Orc/Running/01.png'),
    makeImage('../images/Orc/Running/02.png'),
    makeImage('../images/Orc/Running/03.png'),
    makeImage('../images/Orc/Running/04.png'),
    makeImage('../images/Orc/Running/05.png'),
    makeImage('../images/Orc/Running/06.png'),
    makeImage('../images/Orc/Running/07.png'),
    makeImage('../images/Orc/Running/08.png'),
    makeImage('../images/Orc/Running/09.png'),
    makeImage('../images/Orc/Running/10.png'),
    makeImage('../images/Orc/Running/11.png')
  ],

  rightCharacter: [
    makeImage('../images/Orc/RunningRight/00.png'),
    makeImage('../images/Orc/RunningRight/01.png'),
    makeImage('../images/Orc/RunningRight/02.png'),
    makeImage('../images/Orc/RunningRight/03.png'),
    makeImage('../images/Orc/RunningRight/04.png'),
    makeImage('../images/Orc/RunningRight/05.png'),
    makeImage('../images/Orc/RunningRight/06.png'),
    makeImage('../images/Orc/RunningRight/07.png'),
    makeImage('../images/Orc/RunningRight/08.png'),
    makeImage('../images/Orc/RunningRight/09.png'),
    makeImage('../images/Orc/RunningRight/10.png'),
    makeImage('../images/Orc/RunningRight/11.png')
  ],

  hurtCharacter: [
    makeImage('../images/Orc/Hurt/00.png'),
    makeImage('../images/Orc/Hurt/01.png'),
    makeImage('../images/Orc/Hurt/02.png'),
    makeImage('../images/Orc/Hurt/03.png'),
    makeImage('../images/Orc/Hurt/04.png'),
    makeImage('../images/Orc/Hurt/05.png'),
    makeImage('../images/Orc/Hurt/06.png'),
    makeImage('../images/Orc/Hurt/07.png'),
    makeImage('../images/Orc/Hurt/08.png'),
    makeImage('../images/Orc/Hurt/09.png'),
    makeImage('../images/Orc/Hurt/10.png'),
    makeImage('../images/Orc/Hurt/11.png')
  ]
};
