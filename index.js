(function()
{
	const oCore = {	

		init: function()
		{
			window.addEventListener( "load", function()
			{
				this._includeHtmlPages()
			}.bind(this))
		},
		
		_includeHtmlPages: function()
		{
			const oIncludes = document.getElementsByTagName( "include" )
			if( oIncludes && oIncludes.length > 0)
			{
				for( var i = 0 ; i < oIncludes.length ; i++ )
				{
					const oInclude = oIncludes[ i ]
					const sSrc = oInclude.getAttribute( "src" )

					fetch( sSrc )
					  .then(function( oResponse ) 
					  {
					    oInclude.innerHTML = oResponse.text()
					  })
				}
			}
		}		
		
	}

	oCore.init()
})()