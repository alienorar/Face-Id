import loadable from '@loadable/component';
import { Loading } from '@/components/ui/loading';

const SignIn = loadable(() => import('./auth/pages/sign-in'), {
  fallback: <Loading />,
});
const TeacherPanel = loadable(() => import('./teacher-panel/index'), {
  fallback: <Loading />,
});

export {
    SignIn,
    TeacherPanel
}
