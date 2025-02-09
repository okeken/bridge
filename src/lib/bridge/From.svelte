<script>
    import { createEventDispatcher } from "svelte";
    import numeral from "numeral";
    numeral.localeData().delimiters.thousands = " ";
    import dropdown from "./dropdown.png";
    import { addAsset } from "../../stores/wallet";

    export let network = "Unsupported";
    export let token = "ETH";
    export let balance = 0;
    export let logo;
    export let address;
    export let decimals;
    let amount = 0;

    const dispatch = createEventDispatcher();

    const addAssetToWallet = async () => {
        await addAsset(address, token, decimals, logo);
    };

    function selectTokenModal() {
        dispatch("selectToken");
    }

    const onChange = async (event) => {
        if (
            event.target.validity.rangeUnderflow ||
            !event.target.value ||
            event.target.value.includes("-")
        ) {
            amount = 0;
            event.target.value = 0;
        } else if (event.target.validity.rangeOverflow) {
            amount = balance;
            event.target.value = balance;
        } else if (event.target.validity.patternMismatch) {
            // Non numericals used
            amount = 0;
            event.target.value = 0;
        } else {
            amount = event.target.value;
        }
        dispatch("amountChanged", {
            amountToBridge: amount,
        });
    };
</script>

<div class="container">
    <div class="left">
        <p>From <span class="network-name">{network}</span></p>
        <div class="token-details">
            <div class="token-hitbox" on:click={selectTokenModal}>
                <div class="token-symbol">
                    <img src={logo} alt="token symbol" />
                </div>
                <div class="token-ticker">{token}</div>
                <div class="token-dropdown">
                    <img src={dropdown} alt="dropdown icon" />
                </div>
            </div>
        </div>
        {#if token !== "ETH"}
            <div
                class="token-hitbox"
                style="margin-top: 0.5em;"
                on:click={addAssetToWallet}
            >
                <div class="token-add">add to wallet</div>
            </div>
        {/if}
    </div>
    <div class="right">
        <p>Balance: {numeral(balance).format("0,0.00")} {token}</p>
        <input
            type="number"
            placeholder="Amount"
            pattern="^[0-9]*[.]?[0-9]*$"
            value={amount}
            min="0"
            max={balance}
            on:input={onChange}
        />
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        padding: 0.75em 0;
        margin-top: 0.5em;
    }

    .left,
    .right {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    .right {
        align-items: flex-end;
    }

    .container > .right > input {
        max-height: 44px;
    }

    p {
        color: var(--text-color-medium-grey);
        margin: 0.75rem 0;
    }

    input {
        border: 0;
        display: block;
        text-align: right;
        font-size: 20px;
        width: 100%;
        height: 100%;
        color: var(--text-color);
        background-color: var(--text-color-inverse);
    }

    ::placeholder {
        color: var(--text-color-light-grey);
        opacity: 1;
    }

    .network-name {
        background: -webkit-linear-gradient(45deg, #ff44c9 0%, #00b8fa 100%);
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        left: 0px;
        top: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.15px;
        text-align: center;
    }

    .token-details {
        display: flex;
        flex-direction: row;
        align-content: center;
        margin-top: 0.75em;
    }

    .token-hitbox {
        display: flex;
        flex-direction: row;
        align-content: center;
        cursor: pointer;
    }

    .token-symbol {
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 30px;
        height: 32px;
        width: 32px;
    }
    .token-symbol img {
        margin: auto;
        height: 24px;
        width: 24px;
    }

    .token-ticker {
        font-size: 20px;
        font-weight: 500;
        margin-left: 0.4em;
        margin-top: auto;
        margin-bottom: auto;
    }

    .token-dropdown {
        margin-left: 0.4em;
        margin-top: auto;
        margin-bottom: auto;
        padding-bottom: 2px;
    }

    .token-add {
        display: flex;
        padding: 0.5em;
        font-size: 0.8em;
        cursor: pointer;
        transition: background-color 750ms;
    }

    .token-add:hover {
        background: var(--hover-color);
    }
</style>
