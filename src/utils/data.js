import WalletSvg from '../assets/home/wallet';
import TransferSvg from '../assets/home/transfer';
import PaySvg from '../assets/home/pay';
import TopUpSvg from '../assets/home/topUp';
import colors from './colors';

export const servicesList = [
  {
    name: 'Wallet',
    icon: WalletSvg,
    color: colors.Red1,
  },
  {
    name: 'Transfer',
    icon: TransferSvg,
    color: colors.Blue2,
  },
  {
    name: 'Pay',
    icon: PaySvg,
    color: colors.Orange,
  },
  {
    name: 'Topup',
    icon: TopUpSvg,
    color: colors.Green1,
  },
];

export const recentTransactions = [
  {
    title: 'Dribble',
    description: 'payment recieved',
    amount: 248,
    color: colors.Red1,
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX////uaZbuZpTtY5LtXo/tXI7tWYzsVor+9/n4xtXua5fsVIn74enxi6ztXY71rMP0p7/86O7wg6b2tcn97vPznbj4y9n509798/bylrPzm7f5z9zxkK/++vv86vDvd5/73OX1scbwf6T2uszvcpvrSIL3wNFRJSQuAAAISUlEQVR4nO2ce5eqOAzAsS9AB0EUwQeKozvf/yMuTZHhTZnds+3cze/cP+bOoKchaZKmaR0HQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDk/4r3kfr7MIqicO+nhWd6OP8uNz+JmSs4fcOES+PEv5ke2L+CdzytBaNk1YUQJlanY2Z6gP+QY8BYX7iGmIwFR9OD/DmHiE6KVwuZHEwP9Ufsgg2dFU9BN8GH6eEuZhe48+prKNINdqaHvAgvESAfZXddOYk4/6II4jOwT7Z6es5d11TL1+GbHrgmXszViB/w35e+tfL4V6jxwt8iMXAf+VpfRMIvpoc/TyIaOgERM7LA54jEtAAz5DFrmR04yAPXl3DF4ty0EFNk645f4RDLCzEszSB0bXEid+uln4TCcP0lIhJqbUa+2w4Mdw1G91hiqJVx28dtQMDS6D7hj1ftDE4+uLVSi9mIDPQKf9YMi2IXSF9FLZyL42GPh/LvmdZUpFGpblYbt1XE42boQhhP3XkByVo+eS3fFY3NitMnYhMDF+A5wqlHqgchRThJa2CRWYG6XCYVVNnc59xUZJDJHpU9u1YlcN7MJKOBfCqbUSIBy/TeTwmb0vB4Tjt8Lx+7TL8I2tY0sWgq+vPx3IUZdp6KiuqR5/d3cWvWi968CykVBI9O6FqAPB/NCc1ssdNJzdQSQuD/GLVTFTXz1iugliyldnpptbK5aORtsDN8V8fdCjsS1EBzgcsgExtOfZSzdZKOvZPAqGQVO41cRQ0XfOPgWrFKz589j+XaoERdFZZ2+iWfH5i1VYp22fTfigVKPPSHNS6itNO8JyFTq49B7W7MF/zHXMcQSiPd6MmVxywGgyo1n57qxMIakcqPtOvgG0h3RgQsFWxUupLjIglXRH5m1zBsooQeL1Yx05tv+n4GoBDXv50Nu6vF/HF0Npv2NXPLhR5QXqw/JapZ9phIGpjZgsZCI32r5KF2btaF+pbTVOZu2ExPy4y0REipZMQgIlTfkU1vT5GTSQGd9VIBV+QuP/e1dYMq0l3EzFtamxTwJufPgoAo4WB18Xtb+zSbtwuTxVO/nIb3kPJFtkoaX5CS+fdjdOM0IZB0XK5sq72bzbfF++PZVWfhRUyuEuNSQnjD+eVM3IG2oJ54/PpdQgv1dG+0XkObi9Td88o3Q91PapyUbUiSfn/2ybS3MkyIpvDKpSFPm785XMLrmnHOKKVEIdvY+JbE4aUduh/aodQ1V66BqgtfhZ1lan4r/OcjOgUl13O0f6a7tnBF4WjWrwBhrp0orZouxCsqtHdSbvuXCzFRe93VNpP/FL8eI+U0fs6/6rwIX6KcqZDY3HR3Tam5cLFvaoFQzj4jf7SwckjDeLtVjkhlp7rrErr/70TqEHbtrHQrYkOD5OGnxe7g5XnuZbsi9cPzXbTcLBQnUk0l0tCYhCMzqfSfpTsVrkJwLv1qZ9CwbFrXHwCXS5UD7ktorpKxpEbTQcjP70uBGBf0HpcuN3zsH2FyCj7XTPDWK/mdEkKymf31mfiF13XD+SH9ko3h7/ZbgxL25qE+9D777Ts/WW+klAbn4f6HEpZuN9CLANnxTkz6Uv9HEhL+enZrL152+yiR/rfzlysxGQ913X0TKoKi8RXex1cU3AkXovwn4at7kHyldan7RUzmNOO7gaP6c8+tFXu6KZP0ToCQkYPzVfxIZcbNjealnu62Uy1fUOsm28vGi3w8/ZZB9R7KSrHBtYWzbB6ye62MY7yhK/nDdTJzK6VcGV0fzvdgNEfLvqpPZSGcNAHj0yi4Gl3jJwu61IPKfx4SoVQPYU6jaG50N9/XXcUSUSnQi/jbtMlL/mK2Ucpsre2m6UzpuvKgT96Yuq50O/NZg9F6qWbNe6s2eZ3dq6VzKvX6MRtTjda89fYtRJV1PTr1ewKCz+nQ8L6Fzt6TUJtHh3vvWVhCTccL43tPGgUzdXLGSQeq4hAvnjNKNN36NVdrIUz5iXCwjebpzKZ+pveA58yUMJWmBYP+RI1+OvUzvo8/04uhBMw/x/r45V+nI6LxXozpSoYyUa97VqgGQt3kN1jQTzPVE1WdXVuNKglMcNLQLeiJmvA1AjbSvInzh5CaTrX+GfczktEBcukppw9YqmXDRFZjRW/imBKpykWmjzpDRjbuaqxQ4ViPsFo5OMF0PIduxfHUz2zS/U0yJMUWloOTR2mkhIUzsbywpc97sNiivMzsyUpY9486U2bN8a7+eQv19ud73MGZjuVt9py36Ndr1Bm0ka711oNyATVypsimMzOO1zk+Cnu8zmm+FEdkC3s+/CK4LedJgPbhQmWjR50SByh7MKK45irdg7Sc5lb+Jteq4XDpTIaKkradP2ydIVW9eXq79GIkINp3hrSRncHcci56uzawzO+vLmw8B+xk70YEtZGi2XkK+0q9Qgax8Sx3fR5fVdB0e7pg/fTVfdjO8/hlgIdeQ1aUP2a6O4tQ0O6UzomtdyqUq2EwVHnHjNaRRAnsYKctCQm1YNU7hrrbREQH7Y1FSNta52Xoy8o5+EbdT0P19xWhDtOs7Ft+P01JtGznG1qcGxm6sC7Q90kX9bWDhPUWFjHYlLCA911fehLK87/va5Z+yV1fTn1fm6YOs7368ffc11binecOwtQSBme1aUpE8lsUqLjp3puommmIG1iaxkyw7O5La7OYSQ7R9PWslRIZiyxOYub4w++gBdQ9wgO9zfIe4fXp+LvcyxjyLmjavAua/0l3Qde07vP++DNUhyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8hP+BkMOYZ3/5FAVAAAAAElFTkSuQmCC',
  },
  {
    title: 'Google Wallet',
    description: 'payment via wallet can be done',
    amount: 180,
    color: colors.Green1,
    image:
      'https://www.androidapksbox.com/wp-content/uploads/2017/11/google-wallet.jpg',
  },
  {
    title: 'Uplabs',
    description: 'payment recieved',
    amount: 137,
    color: colors.NavyBlue,
    image:
      'data:image/jpeg;base64,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',
  },
];

export const cardDetails = [
  {
    type_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iTMbkW2raoiMWJLVKLS5_-NVAeNUqrvd8w&usqp=CAU',
    name: 'Amakiri Samuel',
    balance: 243.63,
    card_number: '**** **** **** 1234',
    color: colors.PriColor,
    exp: '10/28',
  },
  {
    type_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iTMbkW2raoiMWJLVKLS5_-NVAeNUqrvd8w&usqp=CAU',
    name: 'Amakiri Samuel',
    balance: 243.73,
    card_number: '**** **** **** 1234',
    color: colors.Orange,
    exp: '10/28',
  },
  {
    type_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iTMbkW2raoiMWJLVKLS5_-NVAeNUqrvd8w&usqp=CAU',
    name: 'Amakiri Samuel',
    balance: 243.67,
    card_number: '**** **** **** 1234',
    color: colors.Green3,
    exp: '10/28',
  },
];
