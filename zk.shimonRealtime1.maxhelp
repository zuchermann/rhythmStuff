{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 7,
			"minor" : 2,
			"revision" : 4,
			"architecture" : "x86",
			"modernui" : 1
		}
,
		"rect" : [ 766.0, 114.0, 640.0, 480.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"fontsize" : 20.0,
					"id" : "obj-20",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 35.0, 203.5, 131.0, 29.0 ],
					"style" : "",
					"text" : "main controls"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"linecount" : 6,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 35.0, 62.0, 422.0, 87.0 ],
					"style" : "",
					"text" : "Patch for real-time interaction with shimon. Patch is written entirely in max and is very lightweight. This patch is not for traditional call and response or jazz trading. This patch is made so that shimon can play along with what you are doing. The patch was originally intended for monophonic input only, but it has been expanded to allow for polyphonic input, however this is not the intended use scenario."
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 32.0,
					"id" : "obj-16",
					"maxclass" : "comment",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 35.0, 16.0, 422.0, 42.0 ],
					"style" : "",
					"suppressinlet" : 1,
					"text" : "zk.shimonRealtime1 - help",
					"textcolor" : [ 0.086275, 0.309804, 0.52549, 1.0 ],
					"underline" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 59.0, 348.0, 423.0, 20.0 ],
					"style" : "",
					"text" : "patch will send /mididata messages to Shimon over 169.254.251.148 51973"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontsize" : 14.0,
					"id" : "obj-11",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 318.0, 298.5, 290.0, 26.0 ],
					"style" : "",
					"text" : "patch will stop output when you hit a low D"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.439216, 0.74902, 0.254902, 1.0 ],
					"bgcolor2" : [ 0.439216, 0.74902, 0.254902, 1.0 ],
					"bgfillcolor_angle" : 270.0,
					"bgfillcolor_autogradient" : 0.0,
					"bgfillcolor_color" : [ 0.784314, 0.145098, 0.023529, 1.0 ],
					"bgfillcolor_color1" : [ 0.439216, 0.74902, 0.254902, 1.0 ],
					"bgfillcolor_color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
					"bgfillcolor_proportion" : 0.39,
					"bgfillcolor_type" : "color",
					"fontsize" : 24.0,
					"gradient" : 1,
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 106.0, 238.0, 56.0, 35.0 ],
					"style" : "",
					"text" : "stop"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.439216, 0.74902, 0.254902, 1.0 ],
					"bgcolor2" : [ 0.439216, 0.74902, 0.254902, 1.0 ],
					"bgfillcolor_angle" : 270.0,
					"bgfillcolor_autogradient" : 0.0,
					"bgfillcolor_color" : [ 0.0, 0.533333, 0.168627, 1.0 ],
					"bgfillcolor_color1" : [ 0.439216, 0.74902, 0.254902, 1.0 ],
					"bgfillcolor_color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
					"bgfillcolor_proportion" : 0.39,
					"bgfillcolor_type" : "color",
					"fontsize" : 24.0,
					"gradient" : 1,
					"id" : "obj-8",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 35.0, 238.0, 64.0, 35.0 ],
					"style" : "",
					"text" : "start"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 195.5, 300.5, 119.0, 22.0 ],
					"style" : "",
					"text" : "zk.shimonRealtime1"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontsize" : 14.0,
					"id" : "obj-101",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 350.0, 244.5, 73.0, 26.0 ],
					"style" : "",
					"text" : "midi in"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 195.5, 213.5, 55.0, 23.0 ],
					"style" : "",
					"text" : "midiinfo"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"items" : [ "IAC Driver Bus 1", ",", "IAC Driver IAC Bus 2", ",", "to Max 1", ",", "to Max 2", ",", "CASIO USB-MIDI" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 195.5, 244.5, 150.0, 22.0 ],
					"style" : ""
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-28",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 231.5, 185.5, 77.0, 23.0 ],
					"style" : "",
					"text" : "loadmess 0"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"bgcolor" : [ 0.317647, 0.654902, 0.976471, 0.62 ],
					"id" : "obj-22",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 28.0, 185.5, 145.0, 108.0 ],
					"proportion" : 0.39,
					"style" : ""
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "zk.shimonRealtime1.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "zk.midiToMidi.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "zk.predictMelody.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "zk.listaccum.js",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "zk.ngram.js",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "zk.diff.js",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "zk.midiWrap.js",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "zk.noteons.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "zk.predictRhythm.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "zk.rhythmList.js",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "zk.doubler.js",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "zk.divie.js",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "zk.pospass.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "zk.filterChords.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "zk.route.maxpat",
				"bootpath" : "~/Documents/Max 7/zach/rhythm",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
