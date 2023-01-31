import { SocialLoginButton } from '../../atoms/buttons/social-login-button/social-login-button';

export const SocialLoginGroup = () => {
   return (
      <>
         <SocialLoginButton text="Google で継行する" />
         <SocialLoginButton text="Apple で継行する" />
         <SocialLoginButton text="Facebook で継行する" />
      </>
   );
};