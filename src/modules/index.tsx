import loadable from '@loadable/component';
import { Loading } from '@/components/ui/loading';

const SignIn = loadable(() => import('./auth/pages/sign-in'), {
  fallback: <Loading />,
});
const TeacherPanel = loadable(() => import('./teacher-panel/pages'), {
  fallback: <Loading />,
});
const Profile = loadable(() => import('./profile/pages'), {
  fallback: <Loading />,
});
const Schedule = loadable(() => import('./schedule/pages'), {
  fallback: <Loading />,
});

export {
    SignIn,
    TeacherPanel,
    Profile,
    Schedule
}
