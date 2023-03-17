import clsx from 'clsx';

type Props = {
  color?: string;
};

const ButtonGroupSocial = (props: Props) => {
  const color = props.color ?? 'dark-100';
  const socials = [
    {
      icon: 'bxl-facebook-square',
      link: 'https://www.facebook.com/nextverse.org',
    },
    {
      icon: 'bxl-twitter',
      link: 'https://twitter.com/NextVerseOrg',
    },
    {
      icon: 'bxl-telegram',
      link: 'https://t.me/nextverse',
    },
  ];
  return (
    <div className="flex justify-center gap-x-6">
      {socials.map((social, index) => (
        <a
          className="decoration-0"
          key={social.icon}
          href={social.link}
          target="_blank"
        >
          <i
            className={clsx(
              `bx ${social.icon} bx-border-circle bx-tada cursor-pointer border text-3xl transition-all`,
              {
                'border-white': color === 'white',
                'text-white': color === 'white',

                'border-dark-100': color !== 'white',
                'text-dark-100': color !== 'white',

                'hover:border-transparent': color !== 'white',

                'hover:text-[#3b5998] hover:bg-white': index === 0,

                'hover:text-[#1DA1F2] hover:bg-white': index === 1,
                'hover:text-[#0088CC] hover:bg-white': index === 2,
              }
            )}
          ></i>
        </a>
      ))}
    </div>
  );
};

export default ButtonGroupSocial;
