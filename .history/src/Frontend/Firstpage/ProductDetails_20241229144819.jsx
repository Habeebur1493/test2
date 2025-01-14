import React, { useState } from "react";
import "./page1.css";
import {  useParams, useLocation } from "react-router-dom";



const ProductDetails = () => {
  const params = useParams();
  const loacation = useLocation();
  console.log(loacation);

  return (
    <div className="ProductDetails">
      <div className="container1">

        <div className="column1">
          <h1>Customization</h1>
          <input type="text" placeholder="Search Here.." /><br />
          <select name="Products" id="Products">
            <option value="">Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Headphones">Headphones</option>
            <option value="Watches">Watches</option>
            <option value="Telivision">Telivision</option>
            <option value="Shoes">Shoes</option>
          </select>
          <button>Search</button>
        </div>

        <div className="column2">
          <h1>Product Details</h1>

          <div className="item-list">
            <div className="item1">  
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEg8QDw8PDRUPFRUQEA8PDw8PDxAPFRUWFhcRFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQFy0mHSYtLystLS0tLSstLS0rKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsrLS0tLS0tLS0tLf/AABEIAPYAzQMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFBAYHAwj/xABCEAABBAADAwkFBgQEBwEAAAABAAIDEQQSIQUGMRMiQVFhcYGRoQcycrHBFFJiktHwI0JjglOis+EkM0OywuLxFf/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAzEQEAAgECAwQIBgMBAQAAAAAAAQIDBBESITEFMkFRImFxgZGhsdETFCMzweFCUvAVYv/aAAwDAQACEQMRAD8A6BSyQUgKQFIHSApAZUQ6VBSB0gMqApBW7c25hsE0PxEgZm0awavefwt+vBN9liN2ibU9qEln7LhG5fv4h+p/sbw81hORnFD2P7Uw6RrMXAImnQyxOLsh63MOuXutWL+aTXydIhka9rXsc17XC2uaQ5pHWCFmwTpBEhAiEESEBSgKQFICkBSApB6qKSAQMIHSB0gKQCqBA0Ag13fTeuLZ0QcaklksQxXWauLndTRfjwUmdliN3CtqbYxGLldNM8ve7p6AOhrR0AdS1zLbCeEhkk0zV2kClhMs4hN2zqzZ6Jb1O0PaFOJeBmbub14jZ7xyLi6Mm3wPNscOmvuntC2VmYa7RDvmzcazERRzRm2ytD29x6O9bWpkEIiJVEVAIBAUgKQFICkE6UUUgKQMBA0AgFUMBA6QFIE4gAk8Bqe5B86b07VfjsVJM82LyxNqg2EE5QB42e0labWb61Y2GwDnHRt+CwmzZFJWmGwM7ncnFGSTpqND5rHiqvBZ7YrdHaDf+i7XXTUBPxKrOOykx+yZ4hcsTmg/zV9VlW8T0YWxzEc3WfZJtjlcM7DOFOwpofijcSQfA2PJdFZ3c9o2b0SsmKJQRKBWgagEDQCAQTUUIBA0DQCAQNECoaBFt8UHz9PspsW0psO5tMZK4NZ1Rk2wflLVz5OUOnHzmHXN39iYZrBljb22LK45l3Niw2yoGkERtFcKFKxDGZZsjBXAKykNR3vw8boZA5oIyk+NKRPNlaOTVfY9AS7Fym6AZEOq7c4692XzXfjedkdLK2tSBQRKBIJBA1AUgEAg9VFCApAUgdIBA6RDpUFIBAEgAk6Aak9gRYjfk5Ptnk8RtQzCMtbyLXc4DnPYaz6dhA8FyZMkWrvDuphnHbazaNj7y4Zmkjnso1ndG8RnuctHA3cTcMJj4pAHMe14PAtIIIU6dTbfoc+MjaLc4N7SQAm+/RdturVts4uCa2MmjksUWtcCaOicMwcUSwPZa1jMNIy+cZpTRvVrabYPgu/HaOni4MlLbcW3JuRWxoRKoiQgVKCQColSApQFIHSD0pRRSApAUgdIHSIEDpAUgKVEZY8zXN+8CPNS0bxMMqW4bRbyaG1rTjMjmgARZRpWpcM3rQ8F523KXsZOcxKGP3We576LsrgMmQgEdZ149yVtEeDC1Zt4rrdvYow0g96n6ZHHMR49J4qTtMrz4WBvHu2cTI5we5vHIKa5rXX1HjorW3Cl6zLz2Ru6Y3PfIBTP+XpTuGpPR5JN9+hFduqy3TiaWtIY0Fj5g1wrnRmR1fNbsUfqMM07YNvP7tjIXY8tEhURKApAwFBKkBSB0gEHoooQFIHSApAICkDRAqBAwg1zb2zcrxiG17wBHSC7Q12E0uTNi23tDuw5t4is9VngjmAvVcjrY8uIY3EBpka0ijRIHRxWdYWI5MjBua8yAOa/K6jRBAPUsbQMXbL3ZC1uhdzW/EdArSN5YXttDJ2Rs8QRsjF81oaMxBPaT3ld2LHNec9XBnyxbatekMwhbnOgQqI0gYCCQCgYCB0gKQFIPSlFCApA6QFICkAgEAiBA1RXbeIMEosW0CSrF81wdw8FhljektuHvwq9lbRBaaOoXnbPSmdlditoNlfcuCneG83M3k3lp4DmtJKziG+uGZjfiWGxdotFxRwvhANlrmBoF9oS0NWSk0nqy8/KzxtGoYc57A3h60s8NPScue/orkhdzgRIQRIQRpUACgkAgkAgEBSApBNRQgEDCAQJAIBAkDCI1rffeB2EjayIgSz3lcRfJsHF9dJ1AF/Slqy5OGOXV6XZujjUXmbd2Pn6vu5Lg9nzT4tsr3F4a5rnve4ue5+tCzqeHouOb8p36vV1dOG0REbRs3TDynDygPsNdpfQpEuK0bw2mPZscvPbM+IniWlpDvMKwlcs1hh48x4ZppznFxrXVz3diRDC95tKz3UjPJve6sz30QNcoAFNPmT4rswR6Lh1HK0QuitznRKBEIFSBgIGEDQOkAgEDUUIBAIBAFArQJBXbV23hsKLnmaw9DPekPc0arG14r1lvw6bLm7ld/p8Wn7T9ox1bhYAP6k59Qxp+ZWi2o8oevg7G8ctvdH3aXiNpzYp75Z3mR4cWk0AA0ataANAKK05ZmZifU9LRY6462pWOkz/AF8tlju9IGzxZjQLgD1XRA+a1s9Xim1N46w37bOxxIy2gEhNnibtfi2RPX8OZ8YBotDjp4FWJJWGz9k5CZZHOkcODnm67upJlGFupt3k8bPE8gR4l5aL4NlZzWnxqvJb8F9p2dGt0nFpq3jrWPlP2dEK7Hz5IEgSBhAwEEkAgEAgkoopAqQOkCQIoNT3o3xZhiYoA2aUaOu+TjPUa953YFpyZoryjq9TRdm2zRx35V+ctGxu9mPm0OIMYP8ALCBH6jX1Wict58Xs4uztPTpXf28/6UpFkkkknUkkkk9ZPStTuisRygwEZPEHJICfdk5p7Hj3T46jyWcRxV28nHefws8X/wAbejPt/wAZ9/OPgzqpa3a6LujvAJmCGVwEjRQzGs7esdqyh4ms0s0txVjl9Fq/DNDyQ02ekHQ+Cmzj35K3eXaAgiNceA+M/OuPgpLdp8U5LxH/AGzmEzjle7qBPbwWVO9D2c8xXFafVP0brurvu6PLDjCXt0DZ+L2dj/vDt4966Mefws8rW9lRb08PXy8/Z5OixSNeA5rg5rhbXNILSD0ghdT5+1ZrO0xzMhGJIGEDQNA0AgEElFCBIBAkGub77bOFgqM1JMSyM9LR/M/wHqQtWW/DV6HZ2l/Hy+l3Y5z9nKB26/MrifWRBFiKKQFKDznhD2lp0vp6j1rKs7TvDDLirlpNLdJTbnoDMDWl5dT2nVRYrMRtu8jE4nnPc7s5oHkEIrt4tl3V3j+xw4lhGdzS12HDjdueCCD2AgHzTdxajTTlvWfi13EyzvcXOfyhc5z3tJcAXONkjqPgjrik124dkcSSWOaGGzQ4jr71lTaLbyw1FbWxzWI5/wBnR6li3rvd3eafBGm/xYibdC4mu0sP8p9D6rbjyzT2OHWaHHqI3nlbz+/m6jsXbcGMZngfZHvxuoSRnqc368D1rsreLRvD5fUabJgttePf4T7FgsnOYQNA0AgEAgkooQCBIAoOSb+4/lsY9oPNw4ETerNxcfM1/auLNbez6rsrD+HgifGef2a/a0vUSBQKkAgFQkEXIHG2yTX7H79VE8UlVNRQQiIuYgeHlfE9skbnRuaba9poj/bsViZid4YXx1vXhtG8OvbrbcbjIsxpsjKbKwcL6HDsP6hd+O/HD5DXaOdNk2/xnouVscRoGgaAQCCSikgEAgi41qejVBwbET8pJJJd8o9z7+JxP1XmzO87vucVeGkV8oiEQo2Bh4/v98QhCYVUFAkAgTkEmDgibBFCgaKEBSDYNxMYY8ZG29Jg6Nw6DpmHq0ea3YJ2s8ztXFF9PM+XN1Zdz5I0AgaAQNA1FJAIBBWbyYnksLiXji2N9fERQ9SFhedqzLo0lOPPSvrhxBnAeXcVwPtISzfvtUVDlLPl9f0RN2Q1GRqgQCBObaBh3h3ogRQoExwPSsprMdWFMlb9JSKxbCJ4oM/YD8uJwx6pY/VwH1WePvQ5dZG+C8eqfo7SvRfEhAIGEDQNAlFCBIAlBqXtJxmTChn+PI1hPU1oL/m0LRnnar1eyMcW1HFPhEz/AB/LlpZVg8D81xvp0XDr48D2jrRWHiX5CCNcxA8VYhqvbh5+bOieo2RL2tVkdIAIGgSBIBB4QREPe6xR6lvyZInHWu3OHmaXT3pqMmTeNp8P+8ujIK53pvHOhutd2os+Kwrf6rD4NOY+gWzHG9ocmttw6e8+qXaF6D4s0AgaAQNBFRkVoC0QiUGrb67HOM5FjJTC6PM5pIzRm6FOb4cRqFzai8RtEw79De+OZtSXPNp7GxWGvl4Hhv8AjQgywntJAtv9wC0RWJ7svbx9o0nlkjafPrCvD2vFtLX9rSFjMTHV6FMlbxvWd/YrccdWgXd34fspDDJ1jZkRZh0FRmyWSqst3sCimgYRSQBQCAACbyxisRziHlNLQPp3oTLzhZX71/2UWIbn7NcEH4l8h15Bljse/mj0zLo08b23eR2zl4cMV85+n/Q6cux8wEAgkgEDQeVqKVopWiESiqrGO/ij4R6ly4NV3od+lj0Z9qzw/QtMN1lRt/dvATBz5MLFnPGRgMUn5mUStsZLRHVhWkb7xy9nJxzbOAZDiHNiDg0VlzPdISLIOrjfEHyUm0zzl7ekrynnMz6538N/5QLSelYu1NrEXZ7tVVIIGEUIBBFEQc4okywHYinEvBY1poOeC1hPY7gsuGZ6Ob81jraYtbbbz5fNlNxcelSR68AHgknsCfh28pbLarDEbzePjDqHs0whZBK98eR0jxRcC15jDRVg8BZd5rqwRtD5vtTURlyRw9IhuK3vLNAIGgaBoMa1GRWgRKCLigqJ3XPXcPS/qvP1M+m9HTRtjXkA0WqGyVdt/EBjHE9RWU9GeKu9nJt6Yi3ERtOh5GIuH4jmcfUlbMkbbR6np9n246Wt/wDU/wAK9anoilRMIJhUMIoQCCJRHm/Wka8ltomW8boU05a7weCx8XkZecbt7EEYaS1kbSRxaxoPospmXDtDE2CdZh1Ob6g/ourS9Jc2r6wtl0uMIBBJAIGgw7UZFaBZkEXFBW4SLPM93QDXlQ+i83NO95enhjbHC9Lg0LGFazt2USvjhH87rd8DdT51XitlK8VohnNvw8drfD2tD301xjz91kYPfV/ULPP33o9kRtp/fKmeFpeoiEEwglaoYQCKECpEOCLM49gc78rS76JXnLn1M7Y7T7vjLc9gOp47aUl5d+dW9wutqOWXjseOhKet9eQH6rs03dcOqn0o9ixXQ5QgYQNA0AgwCVGSNoFaDzmfTXHqBPkFjado3WsbzEHsmKgF5cPVnlBbVeSWtGlmr8D+izKqDDQf8RI5xLi1ld2Z3/qt+njnMtWst6FYaPvG/NisUfxhv5Y2N+iwy9+Xvdm120tf+8ZVw1C1O55hVEgUEgqJBAIoQRJ0UYsrZMZc8AcXNl/0nrOkek5tXy09p9n1hseynkZHdYGqwl5kt3wWJGUC0c8wy9mtoSfFfmAuzTdz3uDVd+PYzF0OU0AEDCBoBBWkqMiJQRJQY+NdzHeA8yAtWblSWzDG94ZOCOgXmw9SYeW0HVTvum/os9ysKvDkGSY/C0ntFn6rr0/SXHq+tYc0xcuafEnrmkPhnNLnvO9pfUaSOHDSPVH0eDeJWDoDgqFSBhBNUFopFElAC+4KIvN0Is2LgHx/6Tx9Vtw9+HH2lO2lv7vrDZd1sO0xtDh7uhvsWuY5vLm3LdehrY5Kbw09bWLHfeFphZBnc37wDh4aH5hdWlnrDh1delmYutxBAIGEDQCCrKjIkESUGLtA8zxb8wtOo/blu0/7kM3CHQLz4elLx2mOa7uVWnVTbJdZl+IfILs03dlx66PSj2fy5kHW+Q8be4+biua3V9VhjalY9UfRIjVRtBRSRBaCSoEUiiSbeChDYdxCPtkV/dfXflP+63YO+87tXf8AKz7Y+rYNjEsdO06ZJZG+Gc0teTlaXmUnekexaQPt/qtbLwZj35Hxv6iAe46H5rPFbhvEtWavFjmF0vTeQEAgaBoBBVFRkSBFQYm0fc8W/MLTqP25btP+5DMwp0C4IelKO0fdPcqteqh2OabM78bj4BrV26fubuPW88kR6nLsGdAVyProZBKimqqJQCIkFQIoRDtBabrSZcZhD/UrwLXN+qzxd+HJr430149X8ty2g3ksVKOiXLKPEZT6tPmstRXa27wtLPFj9jIwbreFzuieiw2j7qk8mELqN1gHrAK9eHizG07JogQNAIoQVJUUWgigx8eLjd4HyIK1Zo3pLbgnbJD2wLtAvNh6Y2m7m+BWUrSObXQ/k8FM/pyTP8edX0Xdj5YnLeOPVxX1xH0c1wg5o7Fxvq6shyjMgqAohIJhUCBIABQZ2wpWsxWGe45Q2Rtk8AL4rOk7Who1dZtgvEddpdF3thrkJh/K4xu7naj1B8106iu8bvl9Fb0pr5sbBO5zT219VxO+VttH3FjZhVbYN1xxn8LfkF61e7Dxr96XsqxNAIGgEFQoyIoEg85221w6wR6LG0bxMLWdpiUNnPsN7l5T2T2m7Q9ypVrW8EmTZz/xRsZ4vc0H5ld08sXuc+njj1vvn5OfYTgQuR9RV7hRmiFUMoqKImCqGUEUDUUiETwddwUf2vAxNcdZYW849EgAp35ha9CI46Pjc/6Optt4TPwUWy5zwcKc0lrmni17TRHna8+0bPTnaY3hevdmYR2aLCWGy12Y64ovhA8tPovUxzvSHkZo2vLLCzaggEU0QIKlRkRQJAigwsCaJb1Ej1XlXja0w9bHbesS9dq+44dh+SktuPq1LfuXLg4WfffGPBrS75gLuy9yGns2u+pmfLf6tKYKI7VyPpoelqKSolaCJQMFUO0AoBAEokur7izZsHD1sL2Hwea9CF34Z9CHyfadeHU290/JXbywchiGyAc3Ea9gmaKPmKPg5aNRTnu26LJxU4J8PotNm85lrlb7dVtss/wwOouHqf1XoYJ9CHk6iNskswLc0GgEU0QIKhRkECKCJQYTBUh+L5gLzs37kvSwT+nDM2gObfYtUuinVz/2g4gVg4etrpPJrWj5u8l2Zp9GGXZVf1bz7vm1eI80di5nvx0ehUUiqFaCJKIdlUFoGEDAUUwiOg+zGe48THfuvbJXUHtr/wAF2aeeUw+d7ap+pW3q2+E/2vt8WR/Y8RJIcvINM7XVZD2CxXfq3+5bcleKuzysGT8O8S5zsz2jzNBEWCzsbxe5zyfHKKb5lc8YI8ZdWTVTvyjk2PdD2gR4iePCugfG+dzy0h4ewEMLiCaB4NPQt+OnDGzky34532dBC2NRoBAIBBUqMiQIoIlBjaZj12PKl5+fvy9LT/twsZGW2vJa2+OrjW+k+bGEf4UccZ7HAZiPVbbzvt7HdoacNZ9syxYuC1vUhOlFKlQiEBSBgKgyoGAoGgKQbX7MpiMTOzWnw5j1Wx7QP+8rp0/WXi9tR+nWfX9Y/pu+9GEbPhZ8O5xZ9oaYgW6mz/8AF0Xtww8HFSb22h6bGwbIImRRtyNYA0Adg6esrhnzeltHRqu0tkGPa2zsRDEMr3SCbIzRp5J9PNcLuiewLfp7Tvs5NVSI2tDfgupxJBA0AgEFQsWRKhIIlB4NZcg7tfNcmojnDt0sztK0I0XO6t3NPapsKm/boSWPZTZgOD47rMR1i+PV3Lfi2meGUy5clK8eO22zn2Hx8le8PFoW/wDL0lqr2vqY8Yn3PcY+T8H5T+qn5avm2x21m/1j5/cjtCT8P5T+qflq+ZPbWb/WPn90JNoSD7pPw6fNX8tVP/Zz+UfCfuG4+b+n+U/qp+Wr5kdtZ/KPn93ucbJZoM4kcD+qv5Wvmv8A7eb/AFj5/d4SbRlHDJ+U/qn5avmk9tZ/CI+f3L/9CWtS3Xqar+Wow/8AZ1Pq+H9onHzffA/tar+XoxntfU+cfBB2MkI/5jj3ANCyjBjjwardpaqf8/p9m6ex7FH7ZOwknlIC6ySdWPZp/nKz4YiOUOW2W959K0z7ZdOx+ssevuNJrtcav/KuXPPOId2irymWVDJ0Do4gLmdUw8o3fxx8Lh8j9Fuwd9y6qP01kF2PPSCIaBoBBTrFkSoSBFQY8b/4h7AB9VyZ+879LHorNvBaXSp94MIMRh5onGhLG5t9IJB1WVZ2mJW1YtWYcCwzraF6UPEZLTwVD6OpQJsYVDZxHeAgk7h32fksmLxkCivAyeqivSNg4nUqocxQbN7KpSNoxAfzxytPdlzfNoUnorrkk4Mkxr3KYPAD6krhyzvfZ6umrw4t/e88Ox8ErWSOzmfM8OadObWlVpoQBxUyY5ozxZ65Y5R0ZWb/AIhg7D8irh77DVR+lutQux5SQQNAIGg//9k=" alt="" />
              <h1></h1>
              <p></p>
              <h2></h2>
          </div>   
        </div>



      </div>
    </div>
  );
};

export default ProductDetails;
