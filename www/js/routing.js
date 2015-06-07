organizate.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
  }])
        .config(function ($cordovaFacebookProvider) {
          var appID = 1616797005210988;
          var version = "v1.0"; // or leave blank and default is v2.0
//          $cordovaFacebookProvider.browserInit(appID, version);
        })
        .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
          $stateProvider
                  .state('first-page', {
                    url: '/first-page',
                    templateUrl: 'templates/first-page.html'
                  })
                  .state('login-page', {
                    url: '/login-page',
                    templateUrl: 'templates/login-page.html'
                  })
                  .state('signup-page', {
                    url: '/signup-page',
                    templateUrl: 'templates/signup-page.html'
                  })
                  .state('app', {
                    url: '',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                  })
                  .state('app.create-team', {
                    url: '/create-team',
                    views: {'menuContent': {templateUrl: 'templates/create-team.html'}}
                  })
                  .state('app.home-page', {
                    url: '/home-page',
                    views: {'menuContent': {templateUrl: 'templates/home-page.html'}}
                  })
                  .state('app.create-player', {
                    url: '/create-player',
                    views: {'menuContent': {templateUrl: 'templates/create-player.html'}}
                  })
                  .state('app.select-member', {
                    url: '/select-member',
                    views: {'menuContent': {templateUrl: 'templates/select-member.html'}}
                  })
                  .state('app.manage-team', {
                    url: '/manage-team/',
                    views: {'menuContent': {templateUrl: 'templates/manage-team.html'}}
                  })
                  .state('app.game-home', {
                    url: '/game-home',
                    views: {'menuContent': {templateUrl: 'templates/game-home-page.html'}}
                  })
                  .state('app.create-game', {
                    url: '/create-game/:id',
                    views: {'menuContent': {templateUrl: 'templates/create-game.html'}}
                  })
                  .state('app.detail-game', {
                    url: '/detail-game/:id',
                    views: {'menuContent': {templateUrl: 'templates/detail-game.html'}}
                  })
                  .state('app.select-team-member', {
                    url: '/select-team-member',
                    views: {'menuContent': {templateUrl: 'templates/select-team-member.html'}}
                  })
                  .state('app.manage-game-macro', {
                    url: '/manage-game-macro',
                    views: {'menuContent': {templateUrl: 'templates/manage-game-macro.html'}}
                  })
                  .state('app.game-feedback', {
                    url: '/game-feedback',
                    views: {'menuContent': {templateUrl: 'templates/game-feedback.html'}}
                  })
                  .state('app.message-detail', {
                    url: '/message-detail',
                    views: {'menuContent': {templateUrl: 'templates/message-detail.html'}}
                  })
                  .state('app.new-profile', {
                    url: '/new-profile',
                    views: {'menuContent': {templateUrl: 'templates/edit-profile.html'}}
                  })
                  .state('app.user-profile', {
                    url: '/user-profile/:id',
                    views: {'menuContent': {templateUrl: 'templates/user-profile.html'}}
                  })
                  .state('app.personal-profile', {
                    url: '/personal-profile/:id',
                    views: {'menuContent': {templateUrl: 'templates/personal-profile.html'}}
                  })
                  .state('app.message-main', {
                    url: '/message-main',
                    views: {'menuContent': {templateUrl: 'templates/message-main.html'}}
                  })
                  .state('app.message-pick', {
                    url: '/message-pick/:id',
                    views: {'menuContent': {templateUrl: 'templates/message-pick.html'}}
                  })
                  .state('app.special-message-pick', {
                    url: '/special-message-pick/:id',
                    views: {'menuContent': {templateUrl: 'templates/special-message-pick.html'}}
                  })
                  .state('app.message-lineup', {
                    url: '/message-lineup',
                    views: {'menuContent': {templateUrl: 'templates/message-lineup.html'}}
                  })
                  .state('app.message-reminder', {
                    url: '/message-reminder',
                    views: {'menuContent': {templateUrl: 'templates/message-reminder.html'}}
                  })
                  .state('app.game-specific-message', {
                    url: '/game-specific-message',
                    views: {'menuContent': {templateUrl: 'templates/game-specific-message.html'}}
                  })
                  .state('app.game-formation', {
                    url: '/game-formation',
                    views: {'menuContent': {templateUrl: 'templates/game-formation.html'}}
                  })
                  .state('app.personal-team', {
                    url: '/personal-team',
                    views: {'menuContent': {templateUrl: 'templates/personal-team.html'}}
                  })
                  .state('app.personal-game-home', {
                    url: '/personal-game-home',
                    views: {'menuContent': {templateUrl: 'templates/personal-game-home.html'}}
                  })
                  .state('app.message-game-formation', {
                    url: '/message-game-formation',
                    views: {'menuContent': {templateUrl: 'templates/message-game-formation.html'}}
                  })
                  .state('app.roster-member', {
                    url: '/roster-member',
                    views: {'menuContent': {templateUrl: 'templates/roster-member.html'}}
                  })
                  .state('app.select-phonecontact-member', {
                    url: '/select-phonecontact',
                    views: {'menuContent': {templateUrl: 'templates/select-phonecontact-member.html'}}
                  })
                  .state('app.roster-game-member', {
                    url: '/roster-game-member',
                    views: {'menuContent': {templateUrl: 'templates/roster-game-member.html'}}
                  })
                  .state('app.roster-member-view', {
                    url: '/roster-member-view',
                    views: {'menuContent': {templateUrl: 'templates/roster-member-view.html'}}
                  })
                  .state('app.roster-member-message', {
                    url: '/roster-member-message/:id',
                    views: {'menuContent': {templateUrl: 'templates/roster-member-message.html'}}
                  })
                  .state('app.edit-team', {
                    url: '/edit-team',
                    views: {'menuContent': {templateUrl: 'templates/edit-team.html'}}
                  })
                  .state('app.message-view', {
                    url: '/message-view',
                    views: {'menuContent': {templateUrl: 'templates/message-view.html'}}
                  });
          $urlRouterProvider.otherwise('/first-page');


          $translateProvider.translations('en', {
            SIGN_IN: 'Sign In',
            SIGN_UP: 'Sign Up',
            SIGN_IN_FB: 'Sign In with Facebook',
            OR : 'OR',
            USERNAME : 'User Name',
            MALE : 'Male',
            FEMALE : 'Female',
            BIRTHDAY : 'Birthday',
            EMAIL : 'Email Address',
            PASSWORD : 'Password',
            WELCOME1 : 'Hi, welcome to pelotaYA, please choose your role',
            CHOOSE_ROLE : 'CHOOSE YOUR ROLE',
            CREATE_NEW_TEAM : 'Create New Team',
            MANAGE_TEAM : 'Manage Team',
            CREATE_NEW_TEAM_BIG : 'CREATE NEW TEAM',
            I_AM_PLAYER_TEAM : 'I am a player on a team',
            LOGOUT : 'Logout',
            START_FILLING : 'Start filling out these basic of the team you manage',
            DONE_CREATING : 'Done creating, Import team members',
            TEAM_NAME : 'Team Name',
            IMPORT_LATER : 'Import Later',
            ACCESS_PHONE_CONTACT : 'Access your phone contacts to import team members, or create new team members from scratch',
            IMPORT_FROM_PHONE : 'Import From Phone Contacts',
            CREATE_FROM_SCRATCH : 'Create From Scratch',
            IMPORT_FROM_EMAIL : 'Import From Email',
            INVITE_MEMBERS : 'Invite selected members to your team',
            SELECT_TEAM: 'SELECT TEAM',
            SELECT_TEAM_COMMENT: 'Select a team that you participate in to see details about your next game and the lineup when its ready!',
            HOME : 'HOME',
            MESSAGE : 'MESSAGE',
            PROFILE : 'PROFILE',
            ROSTER : 'ROSTER',
            CREATE : 'CREATE',
            MANAGE_LIST : 'MANAGE LIST',
            MANAGE : 'MANAGE',
            DETAILS_FOR_NEXT_GAME: 'Details for next game',
            DATE: 'Date',
            TIME: 'Time',
            OPPONENT : 'Opponent',
            WHERE_ARE_WE_PLAY : 'Where are we play',
            WHERE_ARE_WE_PLAYING : 'Where are we playing',
            SPECIAL_INSTRUCTIONS_FOR_TEAM: 'Special Instrunction for the team',
            PENDING : 'Pending',
            IN : 'In',
            OUT : 'Out',
            SEE_LINE_UP : 'See Line up!(if ready)',
            SEND_SPECIFIC_INSTRUCTION : 'Send specific instructions to your team regarding the next coming game',
            WHO_TO_SEND_TO : 'Who to send to? Chose filters',
            ALL_TEAM_MEMBER : 'All team member',
            ALL_IN_MEMBER : 'All "IN" for next game',
            ALL_OUT_MEMBER : 'All "OUT" for next game',
            ALL_PENDING_MEMBER : 'All "PENDING" for next game',
            SEND_TO_SELECTED_PLAYERS: 'Send to selected players',
            PLAYERS : 'Players',
            SUB : 'Sub',
            SEND_FORMATION_TO_TEAM: 'Send formation to team members',
            PLAYER_FEEDBACK_FOR_GAME : 'Player feedback for game',
            SEND_TEAM_MESSAGE : 'Send Team Message',
            CHANGE_GAME_DATA : 'Change Game Data and Resend',
            CANCEL_GAME : 'Cancel Game and Inform Team',
            SET_AND_SEND_GAME : 'Set and send game formation',
            SCHEDULED_DATE : 'Scheduled Date',
            SCHEDULED_TIME : 'Scheduled Time',
            SELECT_LOCATION : 'Select Location',
            CREATE_NEW_PLAYER : 'CREATE NEW PLAYER',
            SELECT_ALL : 'SELELCT ALL',
            DESELECT_ALL : 'SELELCT ALL',
            IMPORT_INVITE_SELECT : 'Import invite select team members',
            SAVE_A_FIXED : 'Save a fixed venue for this team',
            NAME : 'Name',
            GENDER: 'Gender',
            EMAIL: 'Email',
            PHONE_NUMBER: 'Phone Number',
            SHIRT_NUMBER: 'Shirt Number',
            POSITION: 'Position',
            SPECIALITY: 'Speciality',
            FAVORED_FOOT: 'Favored foot',
            SAVE : 'Save'
          });

          $translateProvider.translations('sp', {
            SIGN_IN: 'Iniciar sesión',
            SIGN_UP: 'Regístrate',
            SIGN_IN_FB: 'Regístrate con Facebook',
            OR : 'O',
            USERNAME : 'Nombre de usuario',
            MALE : 'Masculino',
            FEMALE : 'Femenino',
            BIRTHDAY : 'Cumpleaños',
            EMAIL : 'Correo electrónico',
            PASSWORD : 'Clave',
            WELCOME1 : 'Bienvenido, elije una de las siguientes opciones.',
            CHOOSE_ROLE : 'Elige tu rol en tu equipo ',
            CREATE_NEW_TEAM : 'Crear equipo',
            MANAGE_TEAM : 'Organizar equipo ya registrado',
            CREATE_NEW_TEAM_BIG : 'Invitar jugadores',
            I_AM_PLAYER_TEAM : 'Soy jugador en un equipo',
            LOGOUT : 'Cerrar sesión',
            START_FILLING : '¿Cómo se llama el equipo?',
            DONE_CREATING : 'Invitar jugadores a tu equipo',
            TEAM_NAME : 'Nombre del equipo',
            IMPORT_LATER : 'Invitar más tarde',
            ACCESS_PHONE_CONTACT : 'Puedes invitar los jugadores de tu equipo a través de las siguientes opciones',
            IMPORT_FROM_PHONE : 'Desde lista de contactos',
            CREATE_FROM_SCRATCH : 'Crear jugador desde cero',
            IMPORT_FROM_EMAIL : 'Manualmente vía email',
            INVITE_MEMBERS : 'Enviar invitaciones',
            SELECT_TEAM: 'Organizar equipo',
            SELECT_TEAM_COMMENT: 'Elige tu equipo para ver los detalles del próximo evento!',
            HOME : 'Inicio',
            MESSAGE : 'Mensajes',
            PROFILE : 'Perfil ',
            ROSTER : 'Equipo',
            CREATE : 'Crear',
            MANAGE_LIST : 'GESTIONAR LA LISTA',
            MANAGE : 'Gestionar',
            DETAILS_FOR_NEXT_GAME: 'Detalles para el próximo evento',
            DATE: 'Fecha',
            TIME: 'Hora',
            OPPONENT : 'Oponente',
            WHERE_ARE_WE_PLAY : 'Ubicación',
            WHERE_ARE_WE_PLAYING : 'Dirección',
            SPECIAL_INSTRUCTIONS_FOR_TEAM: 'Instrucciones del organizador',
            PENDING : 'Juegan',
            IN : 'Pendientes',
            OUT : 'No juegan',
            SEE_LINE_UP : 'Ver alineación',
            SEND_SPECIFIC_INSTRUCTION : 'Enviar instrucciones adicionales al equipo para el próximo evento',
            WHO_TO_SEND_TO : 'Elige a quien enviar',
            ALL_TEAM_MEMBER : 'Todo el equipo',
            ALL_IN_MEMBER : 'Los que Juegan',
            ALL_OUT_MEMBER : 'Los Pendientes',
            ALL_PENDING_MEMBER : 'Los que No juegan',
            SEND_TO_SELECTED_PLAYERS: 'Enviar mensaje',
            PLAYERS : 'Jugadores',
            SUB : 'Sustitutos',
            SEND_FORMATION_TO_TEAM: 'Enviar esta alineación a los jugadores',
            PLAYER_FEEDBACK_FOR_GAME : 'Jugadores disponibles',
            SEND_TEAM_MESSAGE : 'Enviar mensaje al equipo',
            CHANGE_GAME_DATA : 'Modificar datos del partido',
            CANCEL_GAME : 'Cancelar partido',
            SET_AND_SEND_GAME : 'Definir alineación para el partido',
            SCHEDULED_DATE : 'Fecha del evento',
            SCHEDULED_TIME : 'Hora del evento',
            SELECT_LOCATION : 'Ubicación',
            CREATE_NEW_PLAYER : 'Crear nuevo jugador',
            SELECT_ALL : 'todos',
            DESELECT_ALL : 'ninguno',
            IMPORT_INVITE_SELECT : 'Invitar jugadores seleccionados al evento',
            SAVE_A_FIXED : 'Guardar ubicación para próximos eventos',
            NAME : 'Nombre',
            GENDER: 'Género',
            EMAIL: 'Correo electrónico',
            PHONE_NUMBER: 'Numero de teléfono',
            SHIRT_NUMBER: 'Número de camiseta',
            POSITION: 'Position',
            SPECIALITY: 'Especialidad',
            FAVORED_FOOT: 'Pie preferido',
            SAVE : 'Guardar'
          });
          $translateProvider.preferredLanguage('sp');
});