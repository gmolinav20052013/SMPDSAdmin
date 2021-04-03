export function jwtTokenGetter() {
    return (sessionStorage.getItem('currentToken') ?
                  JSON.parse(sessionStorage.getItem('currentToken')).token :
                  null);
  }
