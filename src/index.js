module.exports = function check(str, bracketsConfig) {
  // your solution
  check('()', [['(', ')']]) // -> true
  check('((()))()', [['(', ')']]) // -> true
  check('())(', [['(', ')']]) // -> false
  check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
  check('[(])', [['(', ')'], ['[', ']']]) // -> false
  check('[]()', [['(', ')'], ['[', ']']]) // -> true
  check('[]()(', [['(', ')'], ['[', ']']]) // -> false

  check('||', [['|', '|']]) // -> true
  check('|()|', [['(', ')'], ['|', '|']]) // -> true
  check('|(|)', [['(', ')'], ['|', '|']]) // -> false
  check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
  }
