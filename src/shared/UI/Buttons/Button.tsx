import loadingIcon from '@assets/icons/loading.svg';
import classNames from 'classnames';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disable?: boolean;
  className?: string;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  disable = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        'text-base font-medium',
        'cursor-pointer select-none whitespace-nowrap',
        'transition-all duration-100 ease-in-out',
        'flex w-full flex-row items-center justify-center px-4 py-2 text-lg font-bold disabled:cursor-default',
        'first-letter:capitalize',
        { 'pointer-events-none opacity-70': disable || loading },
        { 'bg-main text-black': variant === 'primary' },
        className
      )}
      {...props}>
      {!!loading && (
        <span className="mx-2 animate-spin">
          <img
            src={loadingIcon}
            className={classNames('h-5 w-5', {
              'stroke-slate-500': variant !== 'primary' && !disable,
              'stroke-white': variant === 'primary' && !disable,
              'stroke-slate-400': disable,
            })}
            alt="Loading icon"
          />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
