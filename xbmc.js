
function XBMCExecSql(inputUrl) {
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function setXBMCResponseFormat() {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=setresponseformat(openRecordSet;<recordset>;closeRecordSet;</recordset>;openRecord;<record>;closeRecord;</record>;openField;<field>;closeField;</field>)';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function setXBMCwatched(myfile) {
var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(UPDATE files SET playCount = "1" WHERE idFile='+myfile+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function setXBMCunwatched(myfile) {
var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(UPDATE files SET playCount = "" WHERE idFile='+myfile+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function downloadNewXBMCFile(url,myFile) {

var inputUrl = '/xbmcCmds/xbmcHttp?command=FileDownloadFromInternet('+url+'; '+myFile+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});

};

function downloadXBMCFile(url,myFile) {

var inputUrl = '/xbmcCmds/xbmcHttp?command=FileDownloadFromInternet('+url+'; '+myFile+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});

	// copy download to thumbs
	// inputUrl = '/xbmcCmds/xbmcHttp?command=FileCopy(special://xbmc/web/XWMM/cache/Video/'+myFile+';special://profile/Thumbnails/Video/'+myFile+')';
	// Ext.Ajax.request({
		// url: inputUrl,
		// method: 'GET',
		//async: false,
		// success: function (t){},
		// failure: function(t){},
		// timeout: 2000
	// });
};

function AddXBMCNewMovieSet(record) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(INSERT INTO sets (strSet) VALUES ("'+record.data.strSet+'"))';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});

}

function AddXBMCNewGenre(record) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(INSERT INTO genre (strGenre) VALUES ("'+record.data.strGenre+'"))';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function updateXBMCAlbumInfo(record) {
	
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execmusicdatabase(UPDATE albuminfo SET strReview = "'+record.data.strReview+'" ,iRating = "'+record.data.iRating+'" WHERE idAlbum='+record.data.idAlbum+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function updateXBMCAlbumScraperInfo(record) {

	var inputUrl = '/xbmcCmds/xbmcHttp?command=execmusicdatabase(UPDATE albuminfo SET strMoods = "'+record.data.strMoods+'", strStyles = "'+record.data.strStyles+'", strThemes = "'+record.data.strThemes+'", strLabel = "'+record.data.strLabel+'", strType = "'+record.data.strType+'" ,strExtraGenres = "'+record.data.strExtraGenres+'" WHERE idAlbum='+record.data.idAlbum+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}
	
function updateXBMCAlbum(record) {

	var inputUrl = '/xbmcCmds/xbmcHttp?command=execmusicdatabase(UPDATE album SET idArtist = "'+record.data.idArtist+'", iYear = "'+record.data.iYear+'", idGenre = "'+record.data.idGenre+'", strAlbum = "'+record.data.strAlbum+'" WHERE idAlbum='+record.data.idAlbum+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});

}

function removeXBMCMovieSet(rec) {
	// Delete Set
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(DELETE FROM sets WHERE idSet='+rec.data.idSet+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
	
	// Delete linked movies
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(DELETE FROM setlinkmovie WHERE idSet='+rec.data.idSet+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function removeXBMCGenre(record) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(DELETE FROM genre WHERE idGenre='+record.data.idGenre+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function checkXBMCGenreUsed(record) {
	var found = false;
	// check if genre is used in movie
	var inputUrl = '/xbmcCmds/xbmcHttp?command=queryvideodatabase(SELECT idMovie FROM genrelinkmovie where idGenre='+record.data.idGenre+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){
					if (TrimXbmcXml(t) != '') {found = true}
				},
		failure: function(t){},
		timeout: 2000
	});
	
	inputUrl = '/xbmcCmds/xbmcHttp?command=queryvideodatabase(SELECT idShow FROM genrelinktvshow where idGenre='+record.data.idGenre+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){
					if (TrimXbmcXml(t) != '') {found = true}
				},
		failure: function(t){},
		timeout: 2000
	});
	return found;

}

function updateXBMCGenreString(record) {

	//update strGenre in Genre Table
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(UPDATE genre SET strGenre = "'+record.data.strGenre+'" WHERE idGenre='+record.data.idGenre+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
	
	var oldValue = record.modified.strGenre;
	var newValue = record.data.strGenre;
	
	//update strGenre in movie Table
	inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(UPDATE movie SET c08 = replace(c08,"'+oldValue+'","'+newValue+'") where c08 like "'+oldValue+'" or c08 like "%/ '+oldValue+'" or c08 like "'+oldValue+' /%" or c08 like "%/ '+oldValue+' /%")';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
	
	//update strGenre in tvshow Table
	inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(UPDATE tvshow SET c08 = replace(c08,"'+oldValue+'","'+newValue+'") where c08 like "'+oldValue+'" or c08 like "%/ '+oldValue+'" or c08 like "'+oldValue+' /%" or c08 like "%/ '+oldValue+' /%")';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

 function getTagAttribute(xmlString, tag) {	
	var temp ="";		
 	for (var i=0 ; i < xmlString.attributes.length; i++) {
		if (xmlString.attributes[i].nodeName == tag) {
			temp = xmlString.attributes[i].nodeValue
		}
	}
	return temp;
 }
 
function TrimXbmcXml(t){

	var temp = t.responseText.replace(/<html>/g, "");
	temp = temp.replace(/<\/html>/g, "");
	temp = temp.replace(/<recordset>/g, "");
	temp = temp.replace(/<\/record>/g, "");
	temp = temp.replace(/<\/recordset>/g, "");
	temp = temp.replace(/\n/g, '');
	temp = temp.replace(/<\/field>/g, "");
	temp = temp.replace(/<field>/g, "");

	return temp;
}

function getFanartList (String) {

	var result = [];
	if (String == "") return result;
	
	if (window.DOMParser)
	 {
	  parser=new DOMParser();
	  xmlDoc=parser.parseFromString(String,"text/xml");
	 }
	else // Internet Explorer
	 {
	  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	  xmlDoc.async="false";
	  xmlDoc.loadXML(String);
	 } 
	 
	 var MasterUrl = xmlDoc.getElementsByTagName("fanart")[0].getAttribute("url");
	 if (MasterUrl == null){ MasterUrl = ""};
	 
	 
	 for (var i=0 ; i < xmlDoc.documentElement.childNodes.length; i++) {
		var downloadUrl = MasterUrl + xmlDoc.getElementsByTagName("thumb")[i].childNodes[0].nodeValue;
		var previewUrl = xmlDoc.getElementsByTagName("thumb")[i].getAttribute("preview");
		if (previewUrl == "" || previewUrl == null) {	previewUrl = downloadUrl}
			else { previewUrl = MasterUrl + previewUrl};
		result.push([previewUrl, downloadUrl, "Remote", ""]);
	}
	 
	 return result;
}

function getCoverList(String, r) {
	
	var result = [];
	if (String == "") return result;
	
	if (String.match("<thumb><thumb>") == null) {
		String = '<test>'+String+'</test>'
	};
	String = String.replace(/\n/g,"");

	if (window.DOMParser)
	 {
	  parser=new DOMParser();
	  xmlDoc=parser.parseFromString(String,"text/xml");
	 }
	else // Internet Explorer
	 {
	  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	  xmlDoc.async="false";
	  xmlDoc.loadXML(String);
	 } 
	 
	// result.push(['../cache/Video/'+r.data.cover, "", "Current", ""]);
	 
	 var MasterUrl = getTagAttribute(xmlDoc.documentElement, 'url');
	 if (MasterUrl == null){ MasterUrl = ""};
	 for (var i=0 ; i < xmlDoc.documentElement.childNodes.length; i++) {
		var downloadUrl = MasterUrl + xmlDoc.getElementsByTagName("thumb")[i].childNodes[0].nodeValue;
		var previewUrl = xmlDoc.getElementsByTagName("thumb")[i].getAttribute("preview");
		if (previewUrl == "" || previewUrl == null) { previewUrl = downloadUrl}
			else { previewUrl = MasterUrl + previewUrl};
		// need to change preview url for impawards links
		if (previewUrl.match("impaward") != null) {previewUrl = previewUrl.replace(/posters\//g,"thumbs/imp_")};
		
		result.push([previewUrl, downloadUrl, "Remote", ""]);
	}
	 return result;
}

function XBMCScanContent(type,path) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=ExecBuiltIn(UpdateLibrary('+type+','+path+'))';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function XBMCgetMoviesFields(resp, r) {

	//var temp = TrimXbmcXml(resp);

	var temp = resp.responseText.replace(/<\/record>/g, "");
	temp = temp.replace(/<record>/g, "");
	temp = temp.replace(/<recordset>/g, "");
	temp = temp.replace(/<\/recordset>/g, "");
	temp = temp.replace(/<html>/g, "");
	temp = temp.replace(/<\/html>/g, "");
	temp = temp.replace(/<\/field>/g, "");
	temp = temp.split("<field>");

	r.data.Moviedescr = temp[1];
	r.data.MovieOutline = temp[2];
	r.data.MovieTagline = temp[3];
	r.data.MovieVotes = temp[4];	
	r.data.MovieRating = temp[5].slice(0,3);
	r.data.MovieWriters = temp[6];
	r.data.MovieRelease = temp[7];
	r.data.MovieImdb = temp[8];
	r.data.sortTitle = temp[9]
	r.data.MovieRuntime = temp[10];
	r.data.MovieDirector = temp[11];
	r.data.MovieStudio = temp[12];
	r.data.MovieViewers = temp[13];
	r.data.MovieTrailer = temp[14];
	r.data.MovieFanartUrl = getFanartList(temp[15]);
	r.data.MovieCoverUrl = getCoverList(temp[16], r);
	
}

function removeXbmcActor(record) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(DELETE FROM actors WHERE idActor ='+record.data.idActor+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function removeXbmcActorEpisode(record) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(DELETE FROM actorlinkepisode WHERE idActor ='+record.data.idActor+' AND idEpisode ='+record.data.idEpisode+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function removeXbmcActorTVShow(record) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(DELETE FROM actorlinktvshow WHERE idActor ='+record.data.idActor+' AND idShow ='+record.data.idShow+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function removeXbmcActorMovie(record) {
	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(DELETE FROM actorlinkmovie WHERE idActor ='+record.data.idActor+' AND idMovie ='+record.data.idMovie+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		async: false,
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function updateXBMCTables(myForm, myTable) {				
	var sqlData = '';
	var itemsList = myForm.form.items.items;
	for (var i = 0; i < itemsList.length; i++){
		f = itemsList[i];
		if(f.isDirty()){
			if (sqlData == '') {sqlData = f.XBMCName+'="'+f.getValue()+'"';}
				else {sqlData = sqlData+' ,'+f.XBMCName+'="'+f.getValue()+'"';}
		}
	}
	if (myTable == 'episode') {
		var idEpisode = Ext.getCmp('episodegrid').getSelectionModel().getSelected().data.idEpisode;
		var myIndex = 'idEpisode='+idEpisode;
	};
	if (myTable == 'tvshow') {
		var idShow = Ext.getCmp('tvshowgrid').getSelectionModel().getSelected().data.idShow;	
		var myIndex = 'idShow='+idShow;
	};
	
	if (myTable == 'movie') {
		var idMovie = selectedMovie;	
		var myIndex = 'idMovie='+idMovie;
	};

	var inputUrl = '/xbmcCmds/xbmcHttp?command=execvideodatabase(UPDATE '+myTable+' SET '+sqlData+' WHERE '+myIndex+')';
	Ext.Ajax.request({
		url: inputUrl,
		method: 'GET',
		success: function (t){},
		failure: function(t){},
		timeout: 2000
	});
}

function XBMCTVShowgetFields(t, r) {

	var temp = t.responseText.replace(/<\/record>/g, "");
	temp = temp.replace(/<record>/g, "");
	temp = temp.replace(/<html>/g, "");
	temp = temp.replace(/<\/html>/g, "");
	temp = temp.replace(/<recordset>/g, "");
	temp = temp.replace(/<\/recordset>/g, "");
	temp = temp.replace(/<\/field>/g, "");
	temp = temp.split("<field>");

	//temp = TrimXbmcXml(t); should be used
	r.data.ShowDescr = temp[1];
	r.data.ShowRating = temp[2];
	r.data.showAired = temp[3];
	r.data.ShowThumbs = temp[4];
	r.data.ShowGenre = temp[5];
	r.data.ShowFanarts = temp[6];
	r.data.ShowVotes = temp[7];
	r.data.showChannel = temp[8];
	r.data.ShowPath = temp[9].replace(/\n/g,"");
	// r.data.totalCount = temp[10];
	// r.data.watchedCount = temp[11];
}

function XBMCEpisodegetFields(t, r) {

	var temp = t.responseText.replace(/<\/record>/g, "");
	temp = temp.replace(/<record>/g, "");
	temp = temp.replace(/<recordset>/g, "");
	temp = temp.replace(/<\/recordset>/g, "");
	temp = temp.replace(/<\/field>/g, "");
	temp = temp.split("<field>");
	
	//temp = TrimXbmcXml(t); should be used
	r.data.EpisodeTitle = temp[1];
	r.data.EpisodeDescr = temp[2];
	r.data.EpisodeRating = temp[3].slice(0,3);
	r.data.EpisodeWriter = temp[4];
	r.data.EpisodeAired = temp[5];
	r.data.EpisodeDirector = temp[6];
	r.data.strPath = temp[7].replace(/\n/g,"");
	r.data.strFilename = temp[8];
	r.data.idFile = temp[9].replace(/\n/g,"");

}


Ext.data.JsonXBMCReader = function(meta, recordType){
    meta = meta || {};
    Ext.data.JsonXBMCReader.superclass.constructor.call(this, meta, recordType||meta.fields);
};
Ext.extend(Ext.data.JsonXBMCReader, Ext.data.DataReader, {
    /**
     * This method is only used by a DataProxy which has retrieved data from a remote server.
     * @param {Object} response The XHR object which contains the JSON data in its responseText.
     * @return {Object} data A data block which is used by an Ext.data.Store object as
     * a cache of Ext.data.Records.
     */
    read : function(response){
	
		var temp = response.responseText.replace(/<html>/g, "");
		temp = temp.replace(/<\/html>/g, "");
		temp = temp.replace(/^M/g, "");
		temp = temp.replace(/<recordset>/g, "");
		temp = temp.replace(/<\/record>/g, "");
		temp = temp.replace(/<\/recordset>/g, "");
		temp = temp.replace(/\n/g, '');
		temp = temp.replace(/\r/g, '');
		
		var responseArr = temp;
		
		responseArr = responseArr.split("<record>");
		
		var j = 0;
		str = '{"data": [';
		for (var i = 0; i < responseArr.length; i++) {
			if (responseArr[i] != "" && responseArr[i].length > 3) {
				responseArr[i] = responseArr[i].replace(/<\/field>/g, "");
				responseArr[i] = responseArr[i].split("<field>");
				str = str+"{";
				for (var j = 1; j < responseArr[i].length; j++) {
					var tempstr = responseArr[i][j].replace(/\\/g,"\\\\");
					tempstr = tempstr.replace(/\"/g,'\\\"');
					
					if (j == (responseArr[i].length - 1)){
					str = str+'"field:nth('+j+')": "'+tempstr+'"';
					}
					else{
					str = str+'"field:nth('+j+')": "'+tempstr+'",';
					}
				};
				if (i == (responseArr.length - 1)) {
					str = str+'}\n';
				}
				else{
					str = str+'},\n';
				}
			}	
		}	
		
		var json = str+']}';
	
        var o = eval("("+json+")");

        if(!o) {
            throw {message: "JsonReader.read: Json object not found"};
        }
        if(o.metaData){
            delete this.ef;
            this.meta = o.metaData;
            this.recordType = Ext.data.Record.create(o.metaData.fields);
            this.onMetaChange(this.meta, this.recordType, o);
        }
	
        return this.readRecords(o);
    },

    // private function a store will implement
    onMetaChange : function(meta, recordType, o){

    },

    /**
	 * @ignore
	 */
    simpleAccess: function(obj, subsc) {
    	return obj[subsc];
    },

	/**
	 * @ignore
	 */
    getJsonAccessor: function(){
        var re = /[\[\.]/;
        return function(expr) {
            try {
                return(re.test(expr))
                    ? new Function("obj", "return obj." + expr)
                    : function(obj){
                        return obj[expr];
                    };
            } catch(e){}
            return Ext.emptyFn;
        };
    }(),

    /**
     * Create a data block containing Ext.data.Records from an XML document.
     * @param {Object} o An object which contains an Array of row objects in the property specified
     * in the config as 'root, and optionally a property, specified in the config as 'totalProperty'
     * which contains the total size of the dataset.
     * @return {Object} data A data block which is used by an Ext.data.Store object as
     * a cache of Ext.data.Records.
     */
    readRecords : function(o){
        /**
         * After any data loads, the raw JSON data is available for further custom processing.
         * @type Object
         */

        this.jsonData = o;
        var s = this.meta, Record = this.recordType,
            f = Record.prototype.fields, fi = f.items, fl = f.length;

//      Generate extraction functions for the totalProperty, the root, the id, and for each field
        if (!this.ef) {
            if(s.totalProperty) {
	            this.getTotal = this.getJsonAccessor(s.totalProperty);
	        }
	        if(s.successProperty) {
	            this.getSuccess = this.getJsonAccessor(s.successProperty);
	        }
	        this.getRoot = s.root ? this.getJsonAccessor(s.root) : function(p){return p;};
	        if (s.id) {
	        	var g = this.getJsonAccessor(s.id);
	        	this.getId = function(rec) {
	        		var r = g(rec);
		        	return (r === undefined || r === "") ? null : r;
	        	};
	        } else {
	        	this.getId = function(){return null;};
	        }
            this.ef = [];
            for(var i = 0; i < fl; i++){
                f = fi[i];
                var map = (f.mapping !== undefined && f.mapping !== null) ? f.mapping : f.name;
                this.ef[i] = this.getJsonAccessor(map);
            }
        }

    	var root = this.getRoot(o), c = root.length, totalRecords = c, success = true;
    	if(s.totalProperty){
            var v = parseInt(this.getTotal(o), 10);
            if(!isNaN(v)){
                totalRecords = v;
            }
        }
        if(s.successProperty){
            var v = this.getSuccess(o);
            if(v === false || v === 'false'){
                success = false;
            }
        }
        var records = [];
	    for(var i = 0; i < c; i++){
		    var n = root[i];
	        var values = {};
	        var id = this.getId(n);
	        for(var j = 0; j < fl; j++){
	            f = fi[j];
                var v = this.ef[j](n);
                values[f.name] = f.convert((v !== undefined) ? v : f.defaultValue)
	        }
	        var record = new Record(values, id);
	        record.json = n;
	        records[i] = record
			
	    }
	    return {
	        success : success,
	        records : records,
	        totalRecords : totalRecords
	    };
    }
});
