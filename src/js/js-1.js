import React from "react";
/**
  Ejemplos:
  1 => -1   no se puede completar ninguna caja
  3 =>  1   se completa 1 caja de 3
  5 =>  1   se completa 1 caja de 5
  11 => 1   se completa 1 caja de 5 y 2 cajas de 3  (1 * 5 + 2 * 3 = 11)

 */

const canBeGroup = qty => {
  return -1;
};

const Fail = () => <span style={{ color: "red", marginLeft: 10 }}>FAIL</span>;
const Pass = () => <span style={{ color: "green", marginLeft: 10 }}>PASS</span>;

export const Test = () => {
  return (
    <div>
      <ul>
        <li>1 {canBeGroup(1) === 1 ? <Fail /> : <Pass />}</li>
        <li>3 {canBeGroup(3) === -1 ? <Fail /> : <Pass />}</li>
        <li>5 {canBeGroup(5) === -1 ? <Fail /> : <Pass />}</li>
        <li>7 {canBeGroup(7) === 1 ? <Fail /> : <Pass />}</li>
        <li>11 {canBeGroup(11) === -1 ? <Fail /> : <Pass />}</li>
        <li>17 {canBeGroup(17) === -1 ? <Fail /> : <Pass />}</li>
      </ul>
    </div>
  );
};
