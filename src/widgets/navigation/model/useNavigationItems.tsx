import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Box, Popover, styled, Typography } from '@mui/material';
import { ROW_SIZE } from '~/widgets/navigation/model/const';

export type SubChildren = {
  group?: String;
  links: NavigationItem[];
};

export type NavigationItem = {
  name: string;
  path: string;
  children?: SubChildren[];
  key?: string;
};

export const StyledPopover = styled(Popover)`
    & .MuiPaper-root {
        width: 100vw;
        max-width: 100vw;
        position: fixed;
        padding: 6px 12px;
        left: 0 !important;
        z-index: 1300;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)<{ isSelected: boolean; theme }>`
  border-bottom: ${({ isSelected, theme }) =>
    isSelected ? `1px solid ${theme.palette.primary.main}` : ''};
  transition-duration: 0.3s;
`;

const StyledChildrenLink = styled(Link)<{ arrayDistance?: number; theme }>`
  grid-row: ${({ arrayDistance }) =>
    arrayDistance && `span ${arrayDistance} / span ${arrayDistance}`};
`;

export const useNavigationItems = (navigationItems: NavigationItem[]) => {
  const [selectedNavItem, setSelectedNavItem] = useState<NavigationItem | null>(
    null,
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (e: Element) => {
    setAnchorEl(e);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <div className={'z-40 flex gap-3'}>
        {navigationItems.map((item) => {
          return (
            <StyledLink
              isSelected={item.name === selectedNavItem?.name}
              className={'z-40'}
              key={item.key ?? item.path + item.name}
              to={item.path}
              onMouseEnter={(e) => {
                handleMenuClose();
                const parentElement =
                  document.getElementsByClassName('navbarLayout')[0];
                handleMenuOpen(parentElement);
                setSelectedNavItem(item);
              }}
            >
              {item.name}
            </StyledLink>
          );
        })}
      </div>
      <StyledPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        disableEnforceFocus
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'start',
        }}
      >
        <div
          className={
            'mx-auto grid w-[550px] grid-flow-col grid-cols-3 grid-rows-5 gap-x-6 gap-y-4 py-[48px]'
          }
        >
          {navigationItems
            .find((elem) => elem.name === selectedNavItem?.name)
            ?.children?.map((item) => {
              return (
                <>
                  <Typography variant={'h6'}>{item.group}</Typography>
                  <>
                    {item.links.map((link, index) => {
                      const isNotLastItem =
                        item.links.length < 5 &&
                        index === item.links.length - 1;

                      return (
                        <StyledChildrenLink
                          arrayDistance={
                            isNotLastItem ? ROW_SIZE - index - 1 : undefined
                          }
                          key={link.key ?? link.path + link.name}
                          to={link.path}
                        >
                          {link.name}
                        </StyledChildrenLink>
                      );
                    })}
                  </>
                </>
              );
            })}
        </div>
      </StyledPopover>
    </Box>
  );
};
