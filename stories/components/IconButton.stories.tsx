import React from "react";
import IconButton from '../../src/components/IconButton';
import BasketIcon from '../../src/icons/Basket_sd';
import SearchIcon from '../../src/icons/SearchIcon';

export default { title: 'IconButton' };

const noOp: any = () => {};

export const withBasket = () => (
  <>
    <IconButton icon={<BasketIcon />} onClick={noOp} />
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);

export const withSearch = () => (
  <>
    <IconButton icon={<SearchIcon />} onClick={noOp} />
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);
