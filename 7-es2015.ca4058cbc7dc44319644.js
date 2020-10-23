(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CfhG:function(b,t,e){"use strict";e.r(t),e.d(t,"DocumentationModule",(function(){return N}));var c=e("2kYt"),n=e("sEIs"),m=e("PCNd"),a=e("EM62"),o=e("aZ8m");const d=[{path:"",component:(()=>{class b{}return b.\u0275fac=function(t){return new(t||b)},b.\u0275cmp=a.Cb({type:b,selectors:[["demo"]],decls:1398,vars:16,consts:[["tagline","Documentation"],[1,"main-content"],["id","documentation","href","#documentation","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","inputs","href","#configuration","aria-hidden","true",1,"anchor"],[1,"highlight"],["id","configuration","href","#configuration","aria-hidden","true",1,"anchor"],[1,"section"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts",1,"source"],[1,"nested-obj"],["href","https://github.com/akveo/ng2-smart-table/blob/master/projects/demo/src/app/pages/examples/filter/advanced-example-filters.component.ts",1,"source"],["id","events","href","#events","aria-hidden","true",1,"anchor"],["id","source-method","href","#source-method","aria-hidden","true",1,"anchor"],[1,"string"]],template:function(b,t){if(1&b){a.Jb(0,"header-component",0),a.Nb(1,"section",1),a.Nb(2,"h2"),a.Nb(3,"a",2),a.Jb(4,"span",3),a.Mb(),a.mc(5,"Documentation"),a.Mb(),a.Nb(6,"h3"),a.Nb(7,"a",4),a.Jb(8,"span",3),a.Mb(),a.mc(9,"Component Inputs"),a.Mb(),a.Nb(10,"table"),a.Nb(11,"tr"),a.Nb(12,"th"),a.mc(13,"Input"),a.Mb(),a.Nb(14,"th"),a.mc(15,"Type"),a.Mb(),a.Nb(16,"th"),a.mc(17,"Description"),a.Mb(),a.Mb(),a.Nb(18,"tr"),a.Nb(19,"td"),a.mc(20,"[settings]"),a.Mb(),a.Nb(21,"td"),a.Nb(22,"span",5),a.mc(23,"Object"),a.Mb(),a.Mb(),a.Nb(24,"td"),a.mc(25,"Table component configuration object, properties described below"),a.Mb(),a.Mb(),a.Nb(26,"tr"),a.Nb(27,"td"),a.mc(28,"[source]"),a.Mb(),a.Nb(29,"td"),a.Nb(30,"span",5),a.mc(31,"Array"),a.Mb(),a.mc(32,"|"),a.Nb(33,"span",5),a.mc(34,"DataSource"),a.Mb(),a.Mb(),a.Nb(35,"td"),a.mc(36,"Table data, either an array or DataSource object (LocalDataSource currently supported)"),a.Mb(),a.Mb(),a.Mb(),a.Nb(37,"h3"),a.Nb(38,"a",6),a.Jb(39,"span",3),a.Mb(),a.mc(40,"Table Configuration"),a.Mb(),a.Nb(41,"table"),a.Nb(42,"tr"),a.Nb(43,"th"),a.mc(44,"Property"),a.Mb(),a.Nb(45,"th"),a.mc(46,"Type"),a.Mb(),a.Nb(47,"th"),a.mc(48,"Default"),a.Mb(),a.Nb(49,"th"),a.mc(50,"Description"),a.Mb(),a.Mb(),a.Nb(51,"tr",7),a.Nb(52,"td"),a.mc(53,"Required Table Settings"),a.Mb(),a.Jb(54,"td"),a.Jb(55,"td"),a.Jb(56,"td"),a.Mb(),a.Nb(57,"tr"),a.Nb(58,"td"),a.mc(59,"columns"),a.Mb(),a.Nb(60,"td"),a.Nb(61,"span",5),a.mc(62,"Object"),a.Mb(),a.Mb(),a.Nb(63,"td"),a.mc(64,"n/a"),a.Mb(),a.Nb(65,"td"),a.mc(66," Table column settings, by default an empty object."),a.Jb(67,"br"),a.mc(68," Example format:"),a.Jb(69,"br"),a.Nb(70,"code"),a.mc(71),a.Nb(72,"b"),a.mc(73,"columnKey"),a.Mb(),a.mc(74),a.Mb(),a.Jb(75,"br"),a.mc(76," Please note, "),a.Nb(77,"b"),a.mc(78,"columnKey"),a.Mb(),a.mc(79," must be the same as a key in data array objects. "),a.Mb(),a.Mb(),a.Nb(80,"tr",7),a.Nb(81,"td"),a.mc(82,"Column Settings"),a.Mb(),a.Jb(83,"td"),a.Jb(84,"td"),a.Nb(85,"td"),a.mc(86," List of a column's settings "),a.Mb(),a.Mb(),a.Nb(87,"tr"),a.Nb(88,"td"),a.mc(89,"title"),a.Mb(),a.Nb(90,"td"),a.Nb(91,"span",5),a.mc(92,"string"),a.Mb(),a.Mb(),a.Nb(93,"td"),a.mc(94,"''"),a.Mb(),a.Nb(95,"td"),a.mc(96," Column title "),a.Mb(),a.Mb(),a.Nb(97,"tr"),a.Nb(98,"td"),a.mc(99,"class"),a.Mb(),a.Nb(100,"td"),a.Nb(101,"span",5),a.mc(102,"string"),a.Mb(),a.Mb(),a.Nb(103,"td"),a.mc(104,"''"),a.Mb(),a.Nb(105,"td"),a.mc(106," Column class "),a.Mb(),a.Mb(),a.Nb(107,"tr"),a.Nb(108,"td"),a.mc(109,"width"),a.Mb(),a.Nb(110,"td"),a.Nb(111,"span",5),a.mc(112,"string"),a.Mb(),a.Mb(),a.Nb(113,"td"),a.mc(114,"''"),a.Mb(),a.Nb(115,"td"),a.mc(116," Column width, example: "),a.Nb(117,"span",5),a.mc(118,"'20px'"),a.Mb(),a.mc(119,", "),a.Nb(120,"span",5),a.mc(121,"'20%'"),a.Mb(),a.Mb(),a.Mb(),a.Nb(122,"tr"),a.Nb(123,"td"),a.mc(124,"editable"),a.Mb(),a.Nb(125,"td"),a.Nb(126,"span",5),a.mc(127,"boolean"),a.Mb(),a.Mb(),a.Nb(128,"td"),a.mc(129,"true"),a.Mb(),a.Nb(130,"td"),a.mc(131," Whether this column is editable or not "),a.Mb(),a.Mb(),a.Nb(132,"tr"),a.Nb(133,"td"),a.mc(134,"type"),a.Mb(),a.Nb(135,"td"),a.Nb(136,"span",5),a.mc(137,"'text'"),a.Mb(),a.mc(138,"|"),a.Nb(139,"span",5),a.mc(140,"'html'"),a.Mb(),a.mc(141,"|"),a.Nb(142,"span",5),a.mc(143,"'custom'"),a.Mb(),a.Mb(),a.Nb(144,"td"),a.mc(145,"'text'"),a.Mb(),a.Nb(146,"td"),a.mc(147," If type is "),a.Nb(148,"span",5),a.mc(149,"text"),a.Mb(),a.mc(150," then cell value will be inserted as text."),a.Jb(151,"br"),a.mc(152," If type is "),a.Nb(153,"span",5),a.mc(154,"html"),a.Mb(),a.mc(155," then cell value will be inserted as html."),a.Jb(156,"br"),a.mc(157," If type is "),a.Nb(158,"span",5),a.mc(159,"custom"),a.Mb(),a.mc(160," the "),a.Nb(161,"code"),a.mc(162,"renderComponent"),a.Mb(),a.mc(163," property must be defined. "),a.Mb(),a.Mb(),a.Nb(164,"tr"),a.Nb(165,"td"),a.mc(166,"renderComponent"),a.Mb(),a.Nb(167,"td"),a.Nb(168,"span",5),a.mc(169,"any"),a.Mb(),a.Mb(),a.Nb(170,"td"),a.mc(171,"null"),a.Mb(),a.Nb(172,"td"),a.mc(173," Custom component that will be responsible for rendering the cell content while in view mode."),a.Jb(174,"br"),a.mc(175," Type must be "),a.Nb(176,"span",5),a.mc(177,"custom"),a.Mb(),a.mc(178," in order for this to work."),a.Jb(179,"br"),a.mc(180," You can see an "),a.Nb(181,"a",8),a.mc(182,"example here"),a.Mb(),a.Mb(),a.Mb(),a.Nb(183,"tr"),a.Nb(184,"td"),a.mc(185,"onComponentInitFunction"),a.Mb(),a.Nb(186,"td"),a.Nb(187,"span",5),a.mc(188,"Function"),a.Mb(),a.Mb(),a.Nb(189,"td"),a.mc(190,"null"),a.Mb(),a.Nb(191,"td"),a.mc(192," Function which will be invoked after "),a.Nb(193,"span",5),a.mc(194,"renderComponent"),a.Mb(),a.mc(195," instantiated and before ngOnInit hook. This function gets "),a.Nb(196,"span",5),a.mc(197,"renderComponent"),a.Mb(),a.mc(198," instance in first param. "),a.Mb(),a.Mb(),a.Nb(199,"tr"),a.Nb(200,"td"),a.mc(201,"editor"),a.Mb(),a.Nb(202,"td"),a.Nb(203,"span",5),a.mc(204,"Object"),a.Mb(),a.Mb(),a.Nb(205,"td"),a.mc(206,"n/a"),a.Mb(),a.Nb(207,"td"),a.mc(208," Editor attributes settings "),a.Mb(),a.Mb(),a.Nb(209,"tr"),a.Nb(210,"td"),a.Nb(211,"span",9),a.mc(212,"editor"),a.Mb(),a.mc(213,".type"),a.Mb(),a.Nb(214,"td"),a.Nb(215,"span",5),a.mc(216,"'text' | 'textarea' | 'completer' | 'list' | 'checkbox'"),a.Mb(),a.Mb(),a.Nb(217,"td"),a.mc(218,"'text'"),a.Mb(),a.Nb(219,"td"),a.mc(220," Editor used when new row is added or edited "),a.Mb(),a.Mb(),a.Nb(221,"tr"),a.Nb(222,"td"),a.Nb(223,"span",9),a.mc(224,"editor"),a.Mb(),a.mc(225,".config"),a.Mb(),a.Nb(226,"td"),a.Nb(227,"span",5),a.mc(228,"Object"),a.Mb(),a.Mb(),a.Nb(229,"td"),a.mc(230,"n/a"),a.Mb(),a.Nb(231,"td"),a.mc(232," Editor configuration settings. Mandatory only for editor types "),a.Nb(233,"span",5),a.mc(234,"completer"),a.Mb(),a.mc(235,", "),a.Nb(236,"span",5),a.mc(237,"list"),a.Mb(),a.Mb(),a.Mb(),a.Nb(238,"tr"),a.Nb(239,"td"),a.Nb(240,"span",9),a.mc(241,"editor.config"),a.Mb(),a.mc(242,".true"),a.Mb(),a.Nb(243,"td"),a.Nb(244,"span",5),a.mc(245,"string"),a.Mb(),a.Mb(),a.Nb(246,"td"),a.mc(247,"''"),a.Mb(),a.Nb(248,"td"),a.mc(249," Only on "),a.Nb(250,"span",5),a.mc(251,"checkbox"),a.Mb(),a.mc(252," type."),a.Jb(253,"br"),a.mc(254," Defines the value to assign when the checkbox is checked. This parameter is optional, if omitted, "),a.Nb(255,"code"),a.mc(256,"true"),a.Mb(),a.mc(257," will be used. "),a.Mb(),a.Mb(),a.Nb(258,"tr"),a.Nb(259,"td"),a.Nb(260,"span",9),a.mc(261,"editor.config"),a.Mb(),a.mc(262,".false"),a.Mb(),a.Nb(263,"td"),a.Nb(264,"span",5),a.mc(265,"string"),a.Mb(),a.Mb(),a.Nb(266,"td"),a.mc(267,"''"),a.Mb(),a.Nb(268,"td"),a.mc(269," Only on "),a.Nb(270,"span",5),a.mc(271,"checkbox"),a.Mb(),a.mc(272," type."),a.Jb(273,"br"),a.mc(274," Defines the value to assign when the checkbox is not checked. This parameter is optional, if omitted, "),a.Nb(275,"code"),a.mc(276,"false"),a.Mb(),a.mc(277," will be used. "),a.Mb(),a.Mb(),a.Nb(278,"tr"),a.Nb(279,"td"),a.Nb(280,"span",9),a.mc(281,"editor.config"),a.Mb(),a.mc(282,".list"),a.Mb(),a.Nb(283,"td"),a.Nb(284,"span",5),a.mc(285,"Array"),a.Mb(),a.Mb(),a.Nb(286,"td"),a.mc(287,"[ ]"),a.Mb(),a.Nb(288,"td"),a.mc(289," Only on "),a.Nb(290,"span",5),a.mc(291,"list"),a.Mb(),a.mc(292," type. Example format:"),a.Jb(293,"br"),a.Nb(294,"code"),a.mc(295),a.Mb(),a.Jb(296,"br"),a.mc(297," Html is supported if column type is "),a.Nb(298,"span",5),a.mc(299,"'html'"),a.Mb(),a.Mb(),a.Mb(),a.Nb(300,"tr"),a.Nb(301,"td"),a.Nb(302,"span",9),a.mc(303,"editor.config"),a.Mb(),a.mc(304,".completer"),a.Mb(),a.Nb(305,"td"),a.Nb(306,"span",5),a.mc(307,"Object"),a.Mb(),a.Mb(),a.Nb(308,"td"),a.mc(309,"n/a"),a.Mb(),a.Nb(310,"td"),a.mc(311," Only on "),a.Nb(312,"span",5),a.mc(313,"completer"),a.Mb(),a.mc(314," type. Example format:"),a.Jb(315,"br"),a.mc(316," Completer configuration settings "),a.Mb(),a.Mb(),a.Nb(317,"tr"),a.Nb(318,"td"),a.Nb(319,"span",9),a.mc(320,"editor.config.completer"),a.Mb(),a.mc(321,".data"),a.Mb(),a.Nb(322,"td"),a.Nb(323,"span",5),a.mc(324,"Array"),a.Mb(),a.Mb(),a.Nb(325,"td"),a.mc(326,"[ ]"),a.Mb(),a.Nb(327,"td"),a.mc(328," Autocomplete list data source."),a.Jb(329,"br"),a.mc(330," Example format:"),a.Jb(331,"br"),a.Nb(332,"code"),a.mc(333),a.Mb(),a.Mb(),a.Mb(),a.Nb(334,"tr"),a.Nb(335,"td"),a.Nb(336,"span",9),a.mc(337,"editor.config.completer"),a.Mb(),a.mc(338,".searchFields"),a.Mb(),a.Nb(339,"td"),a.Nb(340,"span",5),a.mc(341,"string"),a.Mb(),a.Mb(),a.Nb(342,"td"),a.mc(343,"''"),a.Mb(),a.Nb(344,"td"),a.mc(345," Comma separated list of fields to search on. Fields may contain dots for nested attributes; if empty or null all data will be returned "),a.Mb(),a.Mb(),a.Nb(346,"tr"),a.Nb(347,"td"),a.Nb(348,"span",9),a.mc(349,"editor.config.completer"),a.Mb(),a.mc(350,".titleField"),a.Mb(),a.Nb(351,"td"),a.Nb(352,"span",5),a.mc(353,"string"),a.Mb(),a.Mb(),a.Nb(354,"td"),a.mc(355,"''"),a.Mb(),a.Nb(356,"td"),a.mc(357," Name of the field to use as title for the list item "),a.Mb(),a.Mb(),a.Nb(358,"tr"),a.Nb(359,"td"),a.Nb(360,"span",9),a.mc(361,"editor.config.completer"),a.Mb(),a.mc(362,".descriptionField"),a.Mb(),a.Nb(363,"td"),a.Nb(364,"span",5),a.mc(365,"string"),a.Mb(),a.Mb(),a.Nb(366,"td"),a.mc(367,"''"),a.Mb(),a.Nb(368,"td"),a.mc(369," Name of the field to use as description for the list item "),a.Mb(),a.Mb(),a.Nb(370,"tr"),a.Nb(371,"td"),a.mc(372,"filter"),a.Mb(),a.Nb(373,"td"),a.Nb(374,"span",5),a.mc(375,"Object"),a.Mb(),a.Mb(),a.Nb(376,"td"),a.mc(377,"n/a"),a.Mb(),a.Nb(378,"td"),a.mc(379," Column filter attributes settings. This object accepts the same properties as the "),a.Nb(380,"code"),a.mc(381,"editor"),a.Mb(),a.mc(382," object."),a.Jb(383,"br"),a.mc(384," The available types are: "),a.Nb(385,"code"),a.mc(386,"checkbox"),a.Mb(),a.mc(387,", "),a.Nb(388,"code"),a.mc(389,"select"),a.Mb(),a.mc(390,", "),a.Nb(391,"code"),a.mc(392,"completer"),a.Mb(),a.mc(393,"."),a.Jb(394,"br"),a.mc(395," The "),a.Nb(396,"code"),a.mc(397,"checkbox"),a.Mb(),a.mc(398," type accepts one more optional property compared to the "),a.Nb(399,"code"),a.mc(400,"editor"),a.Mb(),a.mc(401," version: "),a.Nb(402,"span",5),a.mc(403,"resetText: string"),a.Mb(),a.mc(404,". It defines the text of the button to reset the checkbox selection."),a.Jb(405,"br"),a.Nb(406,"a",10),a.mc(407,"Click here to see an example"),a.Mb(),a.mc(408," on how to configure it. "),a.Mb(),a.Mb(),a.Nb(409,"tr"),a.Nb(410,"td"),a.mc(411,"valuePrepareFunction"),a.Mb(),a.Nb(412,"td"),a.Nb(413,"span",5),a.mc(414,"Function"),a.Mb(),a.Mb(),a.Nb(415,"td"),a.mc(416," n/a "),a.Mb(),a.Nb(417,"td"),a.mc(418," Function run against a value before it gets inserted into a cell. You can use it to modify how a value is displayed in the cell. "),a.Jb(419,"br"),a.mc(420," This function will be invoked with 2 parameters: cell, row "),a.Mb(),a.Mb(),a.Nb(421,"tr"),a.Nb(422,"td"),a.mc(423,"sort"),a.Mb(),a.Nb(424,"td"),a.Nb(425,"span",5),a.mc(426,"boolean"),a.Mb(),a.Mb(),a.Nb(427,"td"),a.mc(428,"true"),a.Mb(),a.Nb(429,"td"),a.mc(430," Column sort settings, enable/disable. "),a.Mb(),a.Mb(),a.Nb(431,"tr"),a.Nb(432,"td"),a.mc(433,"sortDirection"),a.Mb(),a.Nb(434,"td"),a.Nb(435,"span",5),a.mc(436,"'asc'|'desc'"),a.Mb(),a.Mb(),a.Nb(437,"td"),a.mc(438,"n/a"),a.Mb(),a.Nb(439,"td"),a.mc(440," Sort table by this column with this direction by default."),a.Jb(441,"br"),a.mc(442," Applied only when "),a.Nb(443,"span",5),a.mc(444,"sort"),a.Mb(),a.mc(445," = true. Note: multiple sort option is not supported yet, so sortDirection can be applied to only one column per table. "),a.Mb(),a.Mb(),a.Nb(446,"tr"),a.Nb(447,"td"),a.mc(448,"compareFunction"),a.Mb(),a.Nb(449,"td"),a.Nb(450,"span",5),a.mc(451,"Function"),a.Mb(),a.Mb(),a.Nb(452,"td"),a.mc(453," n/a "),a.Mb(),a.Nb(454,"td"),a.mc(455," Function run against the values to sort the table "),a.Mb(),a.Mb(),a.Nb(456,"tr"),a.Nb(457,"td"),a.mc(458,"filter"),a.Mb(),a.Nb(459,"td"),a.Nb(460,"span",5),a.mc(461,"boolean"),a.Mb(),a.Mb(),a.Nb(462,"td"),a.mc(463,"true"),a.Mb(),a.Nb(464,"td"),a.mc(465," Column filter settings, enable/disable "),a.Mb(),a.Mb(),a.Nb(466,"tr"),a.Nb(467,"td"),a.mc(468,"filterFunction"),a.Mb(),a.Nb(469,"td"),a.Nb(470,"span",5),a.mc(471,"Function"),a.Mb(),a.Mb(),a.Nb(472,"td"),a.mc(473,"n/a"),a.Mb(),a.Nb(474,"td"),a.mc(475," Function run against the column value when filtering is happening "),a.Mb(),a.Mb(),a.Nb(476,"tr",7),a.Nb(477,"td"),a.mc(478,"Other Table Settings"),a.Mb(),a.Jb(479,"td"),a.Jb(480,"td"),a.Jb(481,"td"),a.Mb(),a.Nb(482,"tr"),a.Nb(483,"td"),a.mc(484,"mode"),a.Mb(),a.Nb(485,"td"),a.Nb(486,"span",5),a.mc(487,"'external'"),a.Mb(),a.mc(488,"|"),a.Nb(489,"span",5),a.mc(490,"'inline'"),a.Mb(),a.Mb(),a.Nb(491,"td"),a.mc(492,"'inline'"),a.Mb(),a.Nb(493,"td"),a.mc(494," Determines how to react on action links (Add, Edit, Delete)."),a.Jb(495,"br"),a.Nb(496,"span",5),a.mc(497,"'external'"),a.Mb(),a.mc(498," - just trigger the events (LINK HERE)."),a.Jb(499,"br"),a.Nb(500,"span",5),a.mc(501,"'inline'"),a.Mb(),a.mc(502," - process internally, show forms/inputs/etc"),a.Jb(503,"br"),a.Mb(),a.Mb(),a.Nb(504,"tr"),a.Nb(505,"td"),a.mc(506,"hideHeader"),a.Mb(),a.Nb(507,"td"),a.Nb(508,"span",5),a.mc(509,"'boolean'"),a.Mb(),a.Mb(),a.Nb(510,"td"),a.mc(511,"false"),a.Mb(),a.Nb(512,"td"),a.mc(513," Set to true to not display the table header (which includes table column titles) "),a.Mb(),a.Mb(),a.Nb(514,"tr"),a.Nb(515,"td"),a.mc(516,"hideSubHeader"),a.Mb(),a.Nb(517,"td"),a.Nb(518,"span",5),a.mc(519,"'boolean'"),a.Mb(),a.Mb(),a.Nb(520,"td"),a.mc(521,"false"),a.Mb(),a.Nb(522,"td"),a.mc(523," Set to true to not display the table sub-header (which includes filters and global table actions (currently - Add action)) "),a.Mb(),a.Mb(),a.Nb(524,"tr"),a.Nb(525,"td"),a.mc(526,"noDataMessage"),a.Mb(),a.Nb(527,"td"),a.Nb(528,"span",5),a.mc(529,"string"),a.Mb(),a.Mb(),a.Nb(530,"td"),a.mc(531,"'No data found'"),a.Mb(),a.Nb(532,"td"),a.mc(533," Message shown when there is no data in the table "),a.Mb(),a.Mb(),a.Nb(534,"tr"),a.Nb(535,"td"),a.mc(536,"attr"),a.Mb();a.Nb(537,"td"),a.Nb(538,"span",5),a.mc(539,"Object"),a.Mb(),a.Mb(),a.Nb(540,"td"),a.mc(541,"n/a"),a.Mb(),a.Nb(542,"td"),a.mc(543," Table attributes settings "),a.Mb(),a.Mb(),a.Nb(544,"tr"),a.Nb(545,"td"),a.mc(546,"attr.id"),a.Mb(),a.Nb(547,"td"),a.Nb(548,"span",5),a.mc(549,"string"),a.Mb(),a.Mb(),a.Nb(550,"td"),a.mc(551,"''"),a.Mb(),a.Nb(552,"td"),a.mc(553," Table element id "),a.Mb(),a.Mb(),a.Nb(554,"tr"),a.Nb(555,"td"),a.mc(556,"attr.class"),a.Mb(),a.Nb(557,"td"),a.Nb(558,"span",5),a.mc(559,"string"),a.Mb(),a.Mb(),a.Nb(560,"td"),a.mc(561,"''"),a.Mb(),a.Nb(562,"td"),a.mc(563," Table element class "),a.Mb(),a.Mb(),a.Nb(564,"tr"),a.Nb(565,"td"),a.mc(566,"actions"),a.Mb(),a.Nb(567,"td"),a.Nb(568,"span",5),a.mc(569,"Object"),a.Mb(),a.Mb(),a.Nb(570,"td"),a.mc(571,"n/a"),a.Mb(),a.Nb(572,"td"),a.mc(573," Settings for the table actions "),a.Mb(),a.Mb(),a.Nb(574,"tr"),a.Nb(575,"td"),a.mc(576,"actions.columnTitle"),a.Mb(),a.Nb(577,"td"),a.Nb(578,"span",5),a.mc(579,"string"),a.Mb(),a.Mb(),a.Nb(580,"td"),a.mc(581,"'Actions'"),a.Mb(),a.Nb(582,"td"),a.mc(583," Actions column title "),a.Mb(),a.Mb(),a.Nb(584,"tr"),a.Nb(585,"td"),a.mc(586,"actions.add"),a.Mb(),a.Nb(587,"td"),a.Nb(588,"span",5),a.mc(589,"boolean"),a.Mb(),a.Mb(),a.Nb(590,"td"),a.mc(591,"true"),a.Mb(),a.Nb(592,"td"),a.mc(593," Show/not show Add button "),a.Mb(),a.Mb(),a.Nb(594,"tr"),a.Nb(595,"td"),a.mc(596,"actions.edit"),a.Mb(),a.Nb(597,"td"),a.Nb(598,"span",5),a.mc(599,"boolean"),a.Mb(),a.Mb(),a.Nb(600,"td"),a.mc(601,"true"),a.Mb(),a.Nb(602,"td"),a.mc(603," Show/not show Edit button "),a.Mb(),a.Mb(),a.Nb(604,"tr"),a.Nb(605,"td"),a.mc(606,"actions.delete"),a.Mb(),a.Nb(607,"td"),a.Nb(608,"span",5),a.mc(609,"boolean"),a.Mb(),a.Mb(),a.Nb(610,"td"),a.mc(611,"true"),a.Mb(),a.Nb(612,"td"),a.mc(613," Show/not show Delete button "),a.Mb(),a.Mb(),a.Nb(614,"tr"),a.Nb(615,"td"),a.mc(616,"actions.position"),a.Mb(),a.Nb(617,"td"),a.Nb(618,"span",5),a.mc(619,"'left'"),a.Mb(),a.mc(620,"|"),a.Nb(621,"span",5),a.mc(622,"'right'"),a.Mb(),a.Mb(),a.Nb(623,"td"),a.mc(624,"'left'"),a.Mb(),a.Nb(625,"td"),a.mc(626," Choose actions column position "),a.Mb(),a.Mb(),a.Nb(627,"tr"),a.Nb(628,"td"),a.mc(629,"filter"),a.Mb(),a.Nb(630,"td"),a.Nb(631,"span",5),a.mc(632,"Object"),a.Mb(),a.Mb(),a.Nb(633,"td"),a.mc(634,"n/a"),a.Mb(),a.Nb(635,"td"),a.mc(636," Settings for the table filter "),a.Mb(),a.Mb(),a.Nb(637,"tr"),a.Nb(638,"td"),a.mc(639,"filter.inputClass"),a.Mb(),a.Nb(640,"td"),a.Nb(641,"span",5),a.mc(642,"string"),a.Mb(),a.Mb(),a.Nb(643,"td"),a.mc(644,"''"),a.Mb(),a.Nb(645,"td"),a.mc(646," Filter input class "),a.Mb(),a.Mb(),a.Nb(647,"tr"),a.Nb(648,"td"),a.mc(649,"edit"),a.Mb(),a.Nb(650,"td"),a.Nb(651,"span",5),a.mc(652,"Object"),a.Mb(),a.Mb(),a.Nb(653,"td"),a.mc(654,"n/a"),a.Mb(),a.Nb(655,"td"),a.mc(656," Edit action settings "),a.Mb(),a.Mb(),a.Nb(657,"tr"),a.Nb(658,"td"),a.mc(659,"edit.inputClass"),a.Mb(),a.Nb(660,"td"),a.Nb(661,"span",5),a.mc(662,"string"),a.Mb(),a.Mb(),a.Nb(663,"td"),a.mc(664,"''"),a.Mb(),a.Nb(665,"td"),a.mc(666," Editing form input class "),a.Mb(),a.Mb(),a.Nb(667,"tr"),a.Nb(668,"td"),a.mc(669,"edit.editButtonContent"),a.Mb(),a.Nb(670,"td"),a.Nb(671,"span",5),a.mc(672,"string"),a.Mb(),a.Mb(),a.Nb(673,"td"),a.mc(674,"'Edit'"),a.Mb(),a.Nb(675,"td"),a.mc(676," Edit row button content/title "),a.Mb(),a.Mb(),a.Nb(677,"tr"),a.Nb(678,"td"),a.mc(679,"edit.saveButtonContent"),a.Mb(),a.Nb(680,"td"),a.Nb(681,"span",5),a.mc(682,"string"),a.Mb(),a.Mb(),a.Nb(683,"td"),a.mc(684,"'Update'"),a.Mb(),a.Nb(685,"td"),a.mc(686," Update button content/title "),a.Mb(),a.Mb(),a.Nb(687,"tr"),a.Nb(688,"td"),a.mc(689,"edit.cancelButtonContent"),a.Mb(),a.Nb(690,"td"),a.Nb(691,"span",5),a.mc(692,"string"),a.Mb(),a.Mb(),a.Nb(693,"td"),a.mc(694,"'Cancel'"),a.Mb(),a.Nb(695,"td"),a.mc(696," Cancel button content/title "),a.Mb(),a.Mb(),a.Nb(697,"tr"),a.Nb(698,"td"),a.mc(699,"edit.confirmSave"),a.Mb(),a.Nb(700,"td"),a.Nb(701,"span",5),a.mc(702,"boolean"),a.Mb(),a.Mb(),a.Nb(703,"td"),a.mc(704,"false"),a.Mb(),a.Nb(705,"td"),a.mc(706," Enable/disable "),a.Nb(707,"span",5),a.mc(708,"(confirmEdit)"),a.Mb(),a.mc(709," event. If enabled data will be edited only if confirm.resolve() called. "),a.Mb(),a.Mb(),a.Nb(710,"tr"),a.Nb(711,"td"),a.mc(712,"add"),a.Mb(),a.Nb(713,"td"),a.Nb(714,"span",5),a.mc(715,"Object"),a.Mb(),a.Mb(),a.Nb(716,"td"),a.mc(717,"n/a"),a.Mb(),a.Nb(718,"td"),a.mc(719," Add action settings "),a.Mb(),a.Mb(),a.Nb(720,"tr"),a.Nb(721,"td"),a.mc(722,"add.inputClass"),a.Mb(),a.Nb(723,"td"),a.Nb(724,"span",5),a.mc(725,"string"),a.Mb(),a.Mb(),a.Nb(726,"td"),a.mc(727,"''"),a.Mb(),a.Nb(728,"td"),a.mc(729," New row input class "),a.Mb(),a.Mb(),a.Nb(730,"tr"),a.Nb(731,"td"),a.mc(732,"add.addButtonContent"),a.Mb(),a.Nb(733,"td"),a.Nb(734,"span",5),a.mc(735,"string"),a.Mb(),a.Mb(),a.Nb(736,"td"),a.mc(737,"'Add New'"),a.Mb(),a.Nb(738,"td"),a.mc(739," Add New button content/title "),a.Mb(),a.Mb(),a.Nb(740,"tr"),a.Nb(741,"td"),a.mc(742,"add.createButtonContent"),a.Mb(),a.Nb(743,"td"),a.Nb(744,"span",5),a.mc(745,"string"),a.Mb(),a.Mb(),a.Nb(746,"td"),a.mc(747,"'Create'"),a.Mb(),a.Nb(748,"td"),a.mc(749," Create button content/title "),a.Mb(),a.Mb(),a.Nb(750,"tr"),a.Nb(751,"td"),a.mc(752,"add.cancelButtonContent"),a.Mb(),a.Nb(753,"td"),a.Nb(754,"span",5),a.mc(755,"string"),a.Mb(),a.Mb(),a.Nb(756,"td"),a.mc(757,"'Cancel'"),a.Mb(),a.Nb(758,"td"),a.mc(759," Cancel button content/title "),a.Mb(),a.Mb(),a.Nb(760,"tr"),a.Nb(761,"td"),a.mc(762,"add.confirmCreate"),a.Mb(),a.Nb(763,"td"),a.Nb(764,"span",5),a.mc(765,"boolean"),a.Mb(),a.Mb(),a.Nb(766,"td"),a.mc(767,"false"),a.Mb(),a.Nb(768,"td"),a.mc(769," Enable/disable "),a.Nb(770,"span",5),a.mc(771,"(confirmCreate)"),a.Mb(),a.mc(772," event. If enabled data will be added only if confirm.resolve() called. "),a.Mb(),a.Mb(),a.Nb(773,"tr"),a.Nb(774,"td"),a.mc(775,"delete"),a.Mb(),a.Nb(776,"td"),a.Nb(777,"span",5),a.mc(778,"Object"),a.Mb(),a.Mb(),a.Nb(779,"td"),a.mc(780,"n/a"),a.Mb(),a.Nb(781,"td"),a.mc(782," Delete action settings "),a.Mb(),a.Mb(),a.Nb(783,"tr"),a.Nb(784,"td"),a.mc(785,"delete.deleteButtonContent"),a.Mb(),a.Nb(786,"td"),a.Nb(787,"span",5),a.mc(788,"string"),a.Mb(),a.Mb(),a.Nb(789,"td"),a.mc(790,"'Delete'"),a.Mb(),a.Nb(791,"td"),a.mc(792," Delete row input class "),a.Mb(),a.Mb(),a.Nb(793,"tr"),a.Nb(794,"td"),a.mc(795,"delete.confirmDelete"),a.Mb(),a.Nb(796,"td"),a.Nb(797,"span",5),a.mc(798,"boolean"),a.Mb(),a.Mb(),a.Nb(799,"td"),a.mc(800,"false"),a.Mb(),a.Nb(801,"td"),a.mc(802," Enable/disable "),a.Nb(803,"span",5),a.mc(804,"(confirmDelete)"),a.Mb(),a.mc(805," event. If enabled data will be deleted only if confirm.resolve() called. "),a.Mb(),a.Mb(),a.Nb(806,"tr"),a.Nb(807,"td"),a.mc(808,"pager"),a.Mb(),a.Nb(809,"td"),a.Nb(810,"span",5),a.mc(811,"Object"),a.Mb(),a.Mb(),a.Nb(812,"td"),a.mc(813,"n/a"),a.Mb(),a.Nb(814,"td"),a.mc(815," Pager settings "),a.Mb(),a.Mb(),a.Nb(816,"tr"),a.Nb(817,"td"),a.mc(818,"pager.display"),a.Mb(),a.Nb(819,"td"),a.Nb(820,"span",5),a.mc(821,"boolean"),a.Mb(),a.Mb(),a.Nb(822,"td"),a.mc(823,"true"),a.Mb(),a.Nb(824,"td"),a.mc(825," Whether to display the pager or not "),a.Mb(),a.Mb(),a.Nb(826,"tr"),a.Nb(827,"td"),a.mc(828,"pager.perPage"),a.Mb(),a.Nb(829,"td"),a.Nb(830,"span",5),a.mc(831,"number"),a.Mb(),a.Mb(),a.Nb(832,"td"),a.mc(833,"10"),a.Mb(),a.Nb(834,"td"),a.mc(835," Rows per page "),a.Mb(),a.Mb(),a.Nb(836,"tr"),a.Nb(837,"td"),a.mc(838,"rowClassFunction"),a.Mb(),a.Nb(839,"td"),a.Nb(840,"span",5),a.mc(841,"Function"),a.Mb(),a.Mb(),a.Nb(842,"td"),a.mc(843,"row"),a.Mb(),a.Nb(844,"td"),a.mc(845," Handle css class for each row in the table "),a.Mb(),a.Mb(),a.Mb(),a.Nb(846,"h3"),a.Nb(847,"a",11),a.Jb(848,"span",3),a.Mb(),a.mc(849,"Component Outputs/Events"),a.Mb(),a.Nb(850,"table"),a.Nb(851,"tr"),a.Nb(852,"th"),a.mc(853,"Event"),a.Mb(),a.Nb(854,"th"),a.mc(855,"Arguments"),a.Mb(),a.Nb(856,"th"),a.mc(857,"Description"),a.Mb(),a.Mb(),a.Nb(858,"tr"),a.Nb(859,"td"),a.mc(860,"(rowSelect)"),a.Mb(),a.Nb(861,"td"),a.mc(862," event: "),a.Nb(863,"span",5),a.mc(864,"Object"),a.Mb(),a.mc(865,", consist of: "),a.Nb(866,"ul"),a.Nb(867,"li"),a.mc(868,"data: "),a.Nb(869,"span",5),a.mc(870,"Object"),a.Mb(),a.mc(871," - selected row data object"),a.Mb(),a.Nb(872,"li"),a.mc(873,"source: "),a.Nb(874,"span",5),a.mc(875,"DataSource"),a.Mb(),a.mc(876," - table data source"),a.Mb(),a.Mb(),a.Mb(),a.Nb(877,"td"),a.mc(878," Triggered once a row is selected (either clicked or selected automatically (after page is changed, after some row is deleted, etc)). "),a.Mb(),a.Mb(),a.Nb(879,"tr"),a.Nb(880,"td"),a.mc(881,"(userRowSelect)"),a.Mb(),a.Nb(882,"td"),a.mc(883," event: "),a.Nb(884,"span",5),a.mc(885,"Object"),a.Mb(),a.mc(886,", consist of: "),a.Nb(887,"ul"),a.Nb(888,"li"),a.mc(889,"data: "),a.Nb(890,"span",5),a.mc(891,"Object"),a.Mb(),a.mc(892," - selected row data object"),a.Mb(),a.Nb(893,"li"),a.mc(894,"source: "),a.Nb(895,"span",5),a.mc(896,"DataSource"),a.Mb(),a.mc(897," - table data source"),a.Mb(),a.Mb(),a.Mb(),a.Nb(898,"td"),a.mc(899," Triggered "),a.Nb(900,"strong"),a.mc(901,"only"),a.Mb(),a.mc(902," on a user click event. "),a.Mb(),a.Mb(),a.Nb(903,"tr"),a.Nb(904,"td"),a.mc(905,"(mouseover)"),a.Mb(),a.Nb(906,"td"),a.mc(907," event: "),a.Nb(908,"span",5),a.mc(909,"Object"),a.Mb(),a.mc(910,", consist of: "),a.Nb(911,"ul"),a.Nb(912,"li"),a.mc(913,"data: "),a.Nb(914,"span",5),a.mc(915,"Object"),a.Mb(),a.mc(916," - highlighted row data object"),a.Mb(),a.Nb(917,"li"),a.mc(918,"source: "),a.Nb(919,"span",5),a.mc(920,"DataSource"),a.Mb(),a.mc(921," - table data source"),a.Mb(),a.Mb(),a.Mb(),a.Nb(922,"td"),a.mc(923," Triggered "),a.Nb(924,"strong"),a.mc(925,"only"),a.Mb(),a.mc(926," on a user mouseover event. "),a.Mb(),a.Mb(),a.Nb(927,"tr"),a.Nb(928,"td"),a.mc(929,"(create)"),a.Mb(),a.Nb(930,"td"),a.mc(931," event: "),a.Nb(932,"span",5),a.mc(933,"Object"),a.Mb(),a.mc(934,", consist of: "),a.Nb(935,"ul"),a.Nb(936,"li"),a.mc(937,"source: "),a.Nb(938,"span",5),a.mc(939,"DataSource"),a.Mb(),a.mc(940," - table data source"),a.Mb(),a.Mb(),a.Mb(),a.Nb(941,"td"),a.mc(942," Triggered once a Create button clicked. Triggered only if table "),a.Nb(943,"strong"),a.mc(944,"mode = external"),a.Mb(),a.mc(945,". "),a.Mb(),a.Mb(),a.Nb(946,"tr"),a.Nb(947,"td"),a.mc(948,"(createConfirm)"),a.Mb(),a.Nb(949,"td"),a.mc(950," event: "),a.Nb(951,"span",5),a.mc(952,"Object"),a.Mb(),a.mc(953,", consist of: "),a.Nb(954,"ul"),a.Nb(955,"li"),a.mc(956,"newData: "),a.Nb(957,"span",5),a.mc(958,"Object"),a.Mb(),a.mc(959," - data entered in a new row"),a.Mb(),a.Nb(960,"li"),a.mc(961,"source: "),a.Nb(962,"span",5),a.mc(963,"DataSource"),a.Mb(),a.mc(964," - table data source"),a.Mb(),a.Nb(965,"li"),a.mc(966,"confirm: "),a.Nb(967,"span",5),a.mc(968,"Deferred"),a.Mb(),a.mc(969," - Deferred object with resolve(newData: Object) and reject() methods."),a.Mb(),a.Mb(),a.Mb(),a.Nb(970,"td"),a.mc(971," Triggered once a Create button clicked. Triggered only if table "),a.Nb(972,"strong"),a.mc(973,"confirmCreate = true and mode = inline"),a.Mb(),a.mc(974,". Allows you to confirm changes before they are applied to the table data source. "),a.Mb(),a.Mb(),a.Nb(975,"tr"),a.Nb(976,"td"),a.mc(977,"(edit)"),a.Mb(),a.Nb(978,"td"),a.mc(979," event: "),a.Nb(980,"span",5),a.mc(981,"Object"),a.Mb(),a.mc(982,", consist of: "),a.Nb(983,"ul"),a.Nb(984,"li"),a.mc(985,"data: "),a.Nb(986,"span",5),a.mc(987,"Object"),a.Mb(),a.mc(988," - row data object"),a.Mb(),a.Nb(989,"li"),a.mc(990,"source: "),a.Nb(991,"span",5),a.mc(992,"DataSource"),a.Mb(),a.mc(993," - table data source"),a.Mb(),a.Mb(),a.Mb(),a.Nb(994,"td"),a.mc(995," Triggered once an Edit button clicked on a row. Triggered only if table "),a.Nb(996,"strong"),a.mc(997,"mode = external"),a.Mb(),a.mc(998,". "),a.Mb(),a.Mb(),a.Nb(999,"tr"),a.Nb(1e3,"td"),a.mc(1001,"(editConfirm)"),a.Mb(),a.Nb(1002,"td"),a.mc(1003," event: "),a.Nb(1004,"span",5),a.mc(1005,"Object"),a.Mb(),a.mc(1006,", consist of: "),a.Nb(1007,"ul"),a.Nb(1008,"li"),a.mc(1009,"data: "),a.Nb(1010,"span",5),a.mc(1011,"Object"),a.Mb(),a.mc(1012," - original row data"),a.Mb(),a.Nb(1013,"li"),a.mc(1014,"newData: "),a.Nb(1015,"span",5),a.mc(1016,"Object"),a.Mb(),a.mc(1017," - edited data"),a.Mb(),a.Nb(1018,"li"),a.mc(1019,"source: "),a.Nb(1020,"span",5),a.mc(1021,"DataSource"),a.Mb(),a.mc(1022," - table data source"),a.Mb(),a.Nb(1023,"li"),a.mc(1024,"confirm: "),a.Nb(1025,"span",5),a.mc(1026,"Deferred"),a.Mb(),a.mc(1027," - Deferred object with resolve(newData: Object) and reject() methods."),a.Mb(),a.Mb(),a.Mb(),a.Nb(1028,"td"),a.mc(1029," Triggered once a Save button clicked. Triggered only if table "),a.Nb(1030,"strong"),a.mc(1031,"confirmSave = true and mode = inline"),a.Mb(),a.mc(1032,". Allows you to confirm changes before they are applied to the table data source. "),a.Mb(),a.Mb(),a.Nb(1033,"tr"),a.Nb(1034,"td"),a.mc(1035,"(delete)"),a.Mb(),a.Nb(1036,"td"),a.mc(1037," event: "),a.Nb(1038,"span",5),a.mc(1039,"Object"),a.Mb(),a.mc(1040,", consist of: "),a.Nb(1041,"ul"),a.Nb(1042,"li"),a.mc(1043,"data: "),a.Nb(1044,"span",5),a.mc(1045,"Object"),a.Mb(),a.mc(1046," - row data object"),a.Mb(),a.Nb(1047,"li"),a.mc(1048,"source: "),a.Nb(1049,"span",5),a.mc(1050,"DataSource"),a.Mb(),a.mc(1051," - table data source"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1052,"td"),a.mc(1053," Triggered once a Delete button clicked on a row. Triggered only if table "),a.Nb(1054,"strong"),a.mc(1055,"mode = external"),a.Mb(),a.mc(1056,". "),a.Mb();a.Mb(),a.Nb(1057,"tr"),a.Nb(1058,"td"),a.mc(1059,"(deleteConfirm)"),a.Mb(),a.Nb(1060,"td"),a.mc(1061," event: "),a.Nb(1062,"span",5),a.mc(1063,"Object"),a.Mb(),a.mc(1064,", consist of: "),a.Nb(1065,"ul"),a.Nb(1066,"li"),a.mc(1067,"data: "),a.Nb(1068,"span",5),a.mc(1069,"Object"),a.Mb(),a.mc(1070," - data object to delete"),a.Mb(),a.Nb(1071,"li"),a.mc(1072,"source: "),a.Nb(1073,"span",5),a.mc(1074,"DataSource"),a.Mb(),a.mc(1075," - table data source"),a.Mb(),a.Nb(1076,"li"),a.mc(1077,"confirm: "),a.Nb(1078,"span",5),a.mc(1079,"Deferred"),a.Mb(),a.mc(1080," - Deferred object with resolve() and reject() methods."),a.Mb(),a.Mb(),a.Mb(),a.Nb(1081,"td"),a.mc(1082," Triggered once a Delete button clicked. Triggered only if table "),a.Nb(1083,"strong"),a.mc(1084,"confirmDelete = true and mode = inline"),a.Mb(),a.mc(1085,". Allows you to confirm changes before they are applied to the table data source. "),a.Mb(),a.Mb(),a.Mb(),a.Nb(1086,"h3"),a.Nb(1087,"a",12),a.Jb(1088,"span",3),a.Mb(),a.mc(1089,"Data Source Methods"),a.Mb(),a.Nb(1090,"table"),a.Nb(1091,"tr"),a.Nb(1092,"th"),a.mc(1093,"Method"),a.Mb(),a.Nb(1094,"th"),a.mc(1095,"Arguments"),a.Mb(),a.Nb(1096,"th"),a.mc(1097,"Description"),a.Mb(),a.Mb(),a.Nb(1098,"tr"),a.Nb(1099,"td"),a.mc(1100,"load"),a.Mb(),a.Nb(1101,"td"),a.Nb(1102,"ul"),a.Nb(1103,"li"),a.mc(1104,"data: "),a.Nb(1105,"span",5),a.mc(1106,"Array"),a.Mb(),a.mc(1107," - data to load into the table"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1108,"td"),a.mc(1109," Reload table with new data. For example if some data has received from the server. "),a.Mb(),a.Mb(),a.Nb(1110,"tr"),a.Nb(1111,"td"),a.mc(1112,"prepend"),a.Mb(),a.Nb(1113,"td"),a.Nb(1114,"ul"),a.Nb(1115,"li"),a.mc(1116,"element: "),a.Nb(1117,"span",5),a.mc(1118,"Object"),a.Mb(),a.mc(1119," - object to add"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1120,"td"),a.mc(1121," Add a new element to the beginning of the table. "),a.Mb(),a.Mb(),a.Nb(1122,"tr"),a.Nb(1123,"td"),a.mc(1124,"append"),a.Mb(),a.Nb(1125,"td"),a.Nb(1126,"ul"),a.Nb(1127,"li"),a.mc(1128,"element: "),a.Nb(1129,"span",5),a.mc(1130,"Object"),a.Mb(),a.mc(1131," - object to add"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1132,"td"),a.mc(1133," Add a new element to the end of the table. This also will switch current page to the last one. "),a.Mb(),a.Mb(),a.Nb(1134,"tr"),a.Nb(1135,"td"),a.mc(1136,"add"),a.Mb(),a.Nb(1137,"td"),a.Nb(1138,"ul"),a.Nb(1139,"li"),a.mc(1140,"element: "),a.Nb(1141,"span",5),a.mc(1142,"Object"),a.Mb(),a.mc(1143," - object to add"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1144,"td"),a.mc(1145," Add a new element to the table. "),a.Mb(),a.Mb(),a.Nb(1146,"tr"),a.Nb(1147,"td"),a.mc(1148,"remove"),a.Mb(),a.Nb(1149,"td"),a.Nb(1150,"ul"),a.Nb(1151,"li"),a.mc(1152,"element: "),a.Nb(1153,"span",5),a.mc(1154,"Object"),a.Mb(),a.mc(1155," - object to remove"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1156,"td"),a.mc(1157," Remove the element from the table. "),a.Mb(),a.Mb(),a.Nb(1158,"tr"),a.Nb(1159,"td"),a.mc(1160,"update"),a.Mb(),a.Nb(1161,"td"),a.Nb(1162,"ul"),a.Nb(1163,"li"),a.mc(1164,"element: "),a.Nb(1165,"span",5),a.mc(1166,"Object"),a.Mb(),a.mc(1167," - object to update"),a.Mb(),a.Nb(1168,"li"),a.mc(1169,"values: "),a.Nb(1170,"span",5),a.mc(1171,"Object"),a.Mb(),a.mc(1172," - object with new values"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1173,"td"),a.mc(1174," Update the element in the table. "),a.Mb(),a.Mb(),a.Nb(1175,"tr"),a.Nb(1176,"td"),a.mc(1177,"find"),a.Mb(),a.Nb(1178,"td"),a.Nb(1179,"ul"),a.Nb(1180,"li"),a.mc(1181,"element: "),a.Nb(1182,"span",5),a.mc(1183,"Object"),a.Mb(),a.mc(1184," - object to find"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1185,"td"),a.mc(1186," Find the element in the table. "),a.Mb(),a.Mb(),a.Nb(1187,"tr"),a.Nb(1188,"td"),a.mc(1189,"getElements"),a.Mb(),a.Nb(1190,"td"),a.mc(1191," n/a "),a.Mb(),a.Nb(1192,"td"),a.mc(1193," Get elements for current sort, filter and page. "),a.Mb(),a.Mb(),a.Nb(1194,"tr"),a.Nb(1195,"td"),a.mc(1196,"getFilteredAndSorted"),a.Mb(),a.Nb(1197,"td"),a.mc(1198," n/a "),a.Mb(),a.Nb(1199,"td"),a.mc(1200," Get sorted, filtered and not paginated elements. "),a.Mb(),a.Mb(),a.Nb(1201,"tr"),a.Nb(1202,"td"),a.mc(1203,"getAll"),a.Mb(),a.Nb(1204,"td"),a.mc(1205," n/a "),a.Mb(),a.Nb(1206,"td"),a.mc(1207," Get all data source elements. "),a.Mb(),a.Mb(),a.Nb(1208,"tr"),a.Nb(1209,"td"),a.mc(1210,"setSort"),a.Mb(),a.Nb(1211,"td"),a.Nb(1212,"ul"),a.Nb(1213,"li"),a.mc(1214," conf: "),a.Nb(1215,"span",5),a.mc(1216,"Array"),a.Mb(),a.mc(1217," - array of sort setting objects, object format is: "),a.Nb(1218,"ul"),a.Nb(1219,"li"),a.mc(1220,"field - "),a.Nb(1221,"span",5),a.mc(1222,"string"),a.Mb(),a.mc(1223," - columnKey"),a.Mb(),a.Nb(1224,"li"),a.mc(1225,"direction - "),a.Nb(1226,"span",13),a.mc(1227,"string|null"),a.Mb(),a.mc(1228," - 'asc'|'desc'|null - sort direction"),a.Mb(),a.Nb(1229,"li"),a.mc(1230,"compare - "),a.Nb(1231,"span",13),a.mc(1232,"Function|null"),a.Mb(),a.mc(1233," - custom compare function"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1234,"li"),a.mc(1235," doEmit: "),a.Nb(1236,"span",5),a.mc(1237,"boolean"),a.Mb(),a.mc(1238," - emit event (to refresh the table) or not, default = true "),a.Mb(),a.Mb(),a.Mb(),a.Nb(1239,"td"),a.mc(1240," Set table sorts, example: "),a.Jb(1241,"br"),a.Nb(1242,"code"),a.mc(1243),a.Mb(),a.Mb(),a.Mb(),a.Nb(1244,"tr"),a.Nb(1245,"td"),a.mc(1246,"setFilter"),a.Mb(),a.Nb(1247,"td"),a.Nb(1248,"ul"),a.Nb(1249,"li"),a.mc(1250," conf: "),a.Nb(1251,"span",5),a.mc(1252,"Array"),a.Mb(),a.mc(1253," - array of filter setting objects, object format is: "),a.Nb(1254,"ul"),a.Nb(1255,"li"),a.mc(1256,"field - "),a.Nb(1257,"span",5),a.mc(1258,"string"),a.Mb(),a.mc(1259," - columnKey"),a.Mb(),a.Nb(1260,"li"),a.mc(1261,"search - "),a.Nb(1262,"span",13),a.mc(1263,"string"),a.Mb(),a.mc(1264," - search query"),a.Mb(),a.Nb(1265,"li"),a.mc(1266,"filter - "),a.Nb(1267,"span",13),a.mc(1268,"Function|null"),a.Mb(),a.mc(1269," - custom filter function"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1270,"li"),a.mc(1271," andOperator: "),a.Nb(1272,"span",5),a.mc(1273,"boolean"),a.Mb(),a.mc(1274," - how to process multiple filters (as AND or as OR), default = true (AND) "),a.Mb(),a.Nb(1275,"li"),a.mc(1276," doEmit: "),a.Nb(1277,"span",5),a.mc(1278,"boolean"),a.Mb(),a.mc(1279," - emit event (to refresh the table) or not, default = true "),a.Mb(),a.Mb(),a.Mb(),a.Nb(1280,"td"),a.mc(1281," Set table filters, example: "),a.Jb(1282,"br"),a.Nb(1283,"code"),a.mc(1284),a.Mb(),a.Mb(),a.Mb(),a.Nb(1285,"tr"),a.Nb(1286,"td"),a.mc(1287,"addFilter"),a.Mb(),a.Nb(1288,"td"),a.Nb(1289,"ul"),a.Nb(1290,"li"),a.mc(1291," conf: "),a.Nb(1292,"span",5),a.mc(1293,"Object"),a.Mb(),a.mc(1294," - one filter object, format is: "),a.Nb(1295,"ul"),a.Nb(1296,"li"),a.mc(1297,"field - "),a.Nb(1298,"span",5),a.mc(1299,"string"),a.Mb(),a.mc(1300," - columnKey"),a.Mb(),a.Nb(1301,"li"),a.mc(1302,"search - "),a.Nb(1303,"span",13),a.mc(1304,"string"),a.Mb(),a.mc(1305," - search query"),a.Mb(),a.Nb(1306,"li"),a.mc(1307,"filter - "),a.Nb(1308,"span",13),a.mc(1309,"Function|null"),a.Mb(),a.mc(1310," - custom filter function"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1311,"li"),a.mc(1312," andOperator: "),a.Nb(1313,"span",5),a.mc(1314,"boolean"),a.Mb(),a.mc(1315," - how to process multiple filters (as AND or as OR), default = true (AND) "),a.Mb(),a.Nb(1316,"li"),a.mc(1317," doEmit: "),a.Nb(1318,"span",5),a.mc(1319,"boolean"),a.Mb(),a.mc(1320," - emit event (to refresh the table) or not, default = true "),a.Mb(),a.Mb(),a.Mb(),a.Nb(1321,"td"),a.mc(1322," Set table filter for one column, example: "),a.Jb(1323,"br"),a.Nb(1324,"code"),a.mc(1325),a.Mb(),a.Mb(),a.Mb(),a.Nb(1326,"tr"),a.Nb(1327,"td"),a.mc(1328,"setPaging"),a.Mb(),a.Nb(1329,"td"),a.Nb(1330,"ul"),a.Nb(1331,"li"),a.mc(1332," page: "),a.Nb(1333,"span",5),a.mc(1334,"number"),a.Mb(),a.mc(1335," - page number "),a.Mb(),a.Nb(1336,"li"),a.mc(1337," perPage: "),a.Nb(1338,"span",5),a.mc(1339,"number"),a.Mb(),a.mc(1340," - about per page "),a.Mb(),a.Nb(1341,"li"),a.mc(1342," doEmit: "),a.Nb(1343,"span",5),a.mc(1344,"boolean"),a.Mb(),a.mc(1345," - emit event (to refresh the table) or not, default = true "),a.Mb(),a.Mb(),a.Mb(),a.Nb(1346,"td"),a.mc(1347," Set table pagination settings "),a.Mb(),a.Mb(),a.Nb(1348,"tr"),a.Nb(1349,"td"),a.mc(1350,"setPage"),a.Mb(),a.Nb(1351,"td"),a.Nb(1352,"ul"),a.Nb(1353,"li"),a.mc(1354," page: "),a.Nb(1355,"span",5),a.mc(1356,"number"),a.Mb(),a.mc(1357," - page number "),a.Mb(),a.Nb(1358,"li"),a.mc(1359," doEmit: "),a.Nb(1360,"span",5),a.mc(1361,"boolean"),a.Mb(),a.mc(1362," - emit event (to refresh the table) or not, default = true "),a.Mb(),a.Mb(),a.Mb(),a.Nb(1363,"td"),a.mc(1364," Set table page "),a.Mb(),a.Mb(),a.Nb(1365,"tr"),a.Nb(1366,"td"),a.mc(1367,"reset"),a.Mb(),a.Nb(1368,"td"),a.Nb(1369,"ul"),a.Nb(1370,"li"),a.mc(1371,"silent: "),a.Nb(1372,"span",5),a.mc(1373,"boolean"),a.Mb(),a.mc(1374," - if true - you have to additionally call `refresh` to reflect the changes"),a.Mb(),a.Mb(),a.Mb(),a.Nb(1375,"td"),a.mc(1376," Set data source to first page with empty filter and empty sort. "),a.Mb(),a.Mb(),a.Nb(1377,"tr"),a.Nb(1378,"td"),a.mc(1379,"refresh"),a.Mb(),a.Nb(1380,"td"),a.mc(1381," n/a "),a.Mb(),a.Nb(1382,"td"),a.mc(1383," Refresh data in the data source. In most cases you won't need this method. "),a.Mb(),a.Mb(),a.Nb(1384,"tr"),a.Nb(1385,"td"),a.mc(1386,"count"),a.Mb(),a.Nb(1387,"td"),a.mc(1388," n/a "),a.Mb(),a.Nb(1389,"td"),a.mc(1390," Return count of element in the data source. "),a.Mb(),a.Mb(),a.Nb(1391,"tr"),a.Nb(1392,"td"),a.mc(1393,"empty"),a.Mb(),a.Nb(1394,"td"),a.mc(1395," n/a "),a.Mb(),a.Nb(1396,"td"),a.mc(1397," Empty the data source. "),a.Mb(),a.Mb(),a.Mb(),a.Mb()}2&b&&(a.xb(71),a.oc(" columns: ","{"," "),a.xb(3),a.qc(": ","{"," title: 'Some Title' ","}"," ","}"," "),a.xb(221),a.pc("","{"," value: 'Element Value', title: 'Element Title' ","}",""),a.xb(38),a.pc("","{"," id: 10, name: 'Nick', email: 'rey@karina.biz' ","}",""),a.xb(910),a.pc("this.source.setSort([","{"," field: 'id', direction: 'asc' ","}","]);"),a.xb(41),a.rc("this.source.setFilter([","{"," field: 'id', search: 'foobar' ","}",", ","{"," field: 'name', search: 'foobar' ","}","]);"),a.xb(41),a.pc("this.source.addFilter(","{"," field: 'id', search: 'foobar' ","}",");"))},directives:[o.a],styles:[".nested-obj[_ngcontent-%COMP%]{color:#bdbdbd}"]}),b})()}];let N=(()=>{class b{}return b.\u0275mod=a.Gb({type:b}),b.\u0275inj=a.Fb({factory:function(t){return new(t||b)},imports:[[c.b,n.c.forChild(d),m.a]]}),b})()}}]);