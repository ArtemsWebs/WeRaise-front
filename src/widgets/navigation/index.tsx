import {
  NavigationItem,
  useNavigationItems,
} from '~/widgets/navigation/model/useNavigationItems';
import { NavigationBar } from '~/widgets/navigation/ui/NavigationBar';
import { defaultNavigationItems } from '~/widgets/navigation/model/const';

interface NavigationBarProps {
  navigationItems?: NavigationItem[];
}

export const Navigation = ({ navigationItems }: NavigationBarProps) => {
  const listOfLinks = useNavigationItems(
    navigationItems ?? defaultNavigationItems,
  );

  return <NavigationBar>{listOfLinks}</NavigationBar>;
};
