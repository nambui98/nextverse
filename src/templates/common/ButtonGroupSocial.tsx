type Props = {
  color?: string;
};

const ButtonGroupSocial = (props: Props) => {
  const color = props.color ?? 'dark-100';
  const socials = [
    'bxl-facebook-square',
    'bxl-twitter',
    'bxl-telegram',
    'bxl-tiktok',
  ];
  return (
    <div className="flex justify-center gap-x-6">
      {socials.map((social) => (
        <i
          key={social}
          className={`bx ${social} bx-border-circle bx-tada border- border text-3xl${color} text-${color}`}
        ></i>
      ))}
    </div>
  );
};

export default ButtonGroupSocial;
