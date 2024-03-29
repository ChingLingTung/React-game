export const TETROMINOS = {
  0 : { shape : [[0]], color: '156, 156, 156' },
  I : {
        shape : [
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0],
                  [0, 'I', 0, 0],
                ],
        color : '24, 116, 205',        
  },
  J : {
        shape : [
                  [0, 'J', 0],
                  [0, 'J', 0],
                  ['J', 'J', 0],
                ],
        color : '255, 187, 255',        
  },
  L : {
        shape : [
                  [0, 'L', 0],
                  [0, 'L', 0],
                  [0, 'L', 'L'],
                ],
        color : '255, 193, 37',        
  },
  O : {
        shape : [
                  ['O', 'O'],
                  ['O', 'O'],
                ],
        color : '67, 205, 128',        
  },
  S : {
        shape : [
                  [0, 'S', 'S'],
                  ['S', 'S', 0],
                  [0, 0, 0],
                ],
        color : '255, 160, 122',        
  },
  T : {
        shape : [
                  ['T', 'T', 'T'],
                  [0, 'T', 0],
                  [0, 0, 0],
                ],
        color : '135, 206, 250',       
  },
  Z : {
    shape : [
              ['Z', 'Z', 0],
              [0, 'Z', 'Z'],
              [0, 0, 0],
            ],
    color : '132, 112, 255',        
  },
};
export const randomTetromino = () =>{
  const tetrominos = 'IJLOSTZ';
  const randTetromino = 
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];  
};