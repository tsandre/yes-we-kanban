// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  // 817955 being hashbangfr group id
  GITLAB_API_BASE_URL: 'https://gitlab.com/api/v3/groups/1370476/',
  // private token for user kanban
  GITLAB_API_TOKEN: '8-gDLrcSd-Vz-zyLtYYk',
  projectsColorMap: {
      'ywk-ex1': '#ff995d',
      'ywk-ex2': '#bfcdff',
  },
};
