import loadable from '@loadable/component';
import { Loading } from '@/components/ui/loading';

const SignIn = loadable(() => import('./auth/pages/sign-in'), {
  fallback: <Loading />,
});

export {
    SignIn
}
