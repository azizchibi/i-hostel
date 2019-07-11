import React, {useEffect, useCallback} from 'react';
import {TextField, InputAdornment, Button, Dialog, DialogActions, DialogContent,Typography, Toolbar, AppBar, Paper} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import FuseUtils from '@fuse/FuseUtils';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {FuseAnimate} from '@fuse';
import  Panier  from './Panier';

const defaultFormState = {
    id      : '',
    email    : '',
    nom:'',
    prenom:'',
    adresse:''
};

function Info(props)
{
   
    const dispatch = useDispatch();
    const infos = useSelector(({hotelsApp}) => hotelsApp.hotels.infos);
    const hotels = useSelector(({hotelsApp}) => hotelsApp.hotels.panier);

    useEffect(() => {
        dispatch(Actions.getPanier());
    }, [dispatch]);

    const {form, handleChange, setForm} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {
          /**
             * Dialog type: 'new'
             */
            if ( infos.type === 'new' )
            {
                setForm({
                    ...defaultFormState,
                    ...infos.data,
                    id: FuseUtils.generateGUID()
                });
            }
        },[infos.data, infos.type, setForm],
    );
    
    useEffect(() => {
        /**
         * After Dialog Open
         */
        if ( infos.props.open )
        {
            initDialog();
        }

    }, [infos.props.open, initDialog]);

    function closeComposeDialog()
    {
        dispatch(Actions.closeNewInfoDialog());
    }

    function canBeSubmitted()
    {
        return (
            form.email.length > 0
        );
    }
    function handleSubmitConfirme(event){
        
        event.preventDefault();
        dispatch(Actions.msgConfirm());
        window.location.reload(true)
       
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        
        dispatch(Actions.addInfo(form));
       
       // closeComposeDialog();
    }


    return (
        <div>
      <Dialog
            classes={{
                paper: "m-24"
            }}
            {...infos.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="xs"
        >

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                    {infos.type === 'new' ? 'Informations personnelles':'Récapitulatif de la commande'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                {infos.type === 'new' ? (
                <DialogContent classes={{root: "p-24"}}>
                    <div className="flex">
                        <TextField
                            className="mb-24"
                            label="Email"
                            autoFocus
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            variant="outlined"
                            type="email"
                            required
                            fullWidth
                        />
                    </div>      
                   
                    <div className="flex">
                        <TextField
                            className="mb-24"
                            label="Nom"
                            autoFocus
                            id="nom"
                            name="nom"
                            value={form.value}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div> 
                    <div className="flex">
                        <TextField
                            className="mb-24"
                            label="Prénom"
                            autoFocus
                            id="prenom"
                            name="prenom"
                            value={form.prenom}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>   
                    <div className="flex">
                        <TextField
                            className="mb-24"
                            label="Adresse"
                            autoFocus
                            id="adresse"
                            name="adresse"
                            value={form.adresse}
                            onChange={handleChange}
                            variant="outlined"
                            multiline
                            fullWidth
                        />
                         </div>  
                    </DialogContent>
                ) :(
                    <DialogContent classes={{root: "p-24"}}>    
                    <FuseAnimate animation="transition.slideRightIn" delay={200}>
                    <Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
                    <h2>Panier</h2>
                        <div  className="-striped -highlight h-full sm:rounded-16 overflow-hidden">
                        {hotels.map((item) => (
                            <Panier key={item.id} image={require(`../../static/${item.image}.jpg`)} 
                                prix= {item.prix} nbrNuits={item.nbrNuits}
                                />
                            ))}
                        </div>
                        
                    <h2>Total: { hotels.reduce((total, client) => { return total + client.total}, 0)}</h2>
                    <br/>
                    </Paper>
                </FuseAnimate>
                </DialogContent>
                )}   
                

                {infos.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            type="submit"
                            disabled={!canBeSubmitted()}
                        >
                            Valider
                        </Button>
                    </DialogActions>
                ) : (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleSubmitConfirme}
                            disabled={!canBeSubmitted()}
                        >
                            Valider
                        </Button>
                    </DialogActions>
                )}

            </form>
        </Dialog>
        </div>
    );
}

export default Info;