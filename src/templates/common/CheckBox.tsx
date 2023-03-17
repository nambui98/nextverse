import React from 'react';

type Props = {
  name: string;
};

const CheckBox = (props: Props) => {
  const { name } = props;
  return (
    <div className="cntr">
      <input type="checkbox" id={name} className="hidden-xs-up" />
      <label htmlFor={name} className="cbx" />
    </div>
  );
};

export default CheckBox;
